#!/bin/bash
# Bakes Node, Nginx, and this app's code into the AMI. Runs as the Packer
# provisioner, as root (via sudo) on a fresh Ubuntu 22.04 instance.
set -euo pipefail

sudo apt-get update -y
sudo apt-get install -y curl nginx jq

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo npm install -g pm2

# --- Backend ---
sudo mkdir -p /opt/codemation/backend
sudo cp -r /tmp/backend/* /opt/codemation/backend/
sudo rm -f /opt/codemation/backend/.env   # secrets come from Secrets Manager at boot, never baked into the image
cd /opt/codemation/backend
sudo npm ci --omit=dev

# --- Frontend (already built by CI into frontend/dist) ---
sudo mkdir -p /var/www/codemation
sudo cp -r /tmp/frontend-dist/* /var/www/codemation/

# --- Runtime env file populated by user-data at boot ---
sudo mkdir -p /etc/codemation
sudo touch /etc/codemation/app.env
sudo chmod 600 /etc/codemation/app.env

# --- systemd unit for the API ---
sudo tee /etc/systemd/system/codemation.service > /dev/null <<'EOF'
[Unit]
Description=Codemation backend
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/codemation/backend
EnvironmentFile=/etc/codemation/app.env
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=5
User=www-data

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable codemation

# --- Nginx: serve the React build, proxy /api to the backend ---
sudo tee /etc/nginx/sites-available/codemation > /dev/null <<'EOF'
server {
    listen 80;
    server_name _;

    root /var/www/codemation;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api/health {
        return 200 'ok';
        add_header Content-Type text/plain;
    }

    location / {
        try_files $uri /index.html;
    }
}
EOF

sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/codemation /etc/nginx/sites-enabled/codemation
sudo systemctl enable nginx

# --- CloudWatch Agent (ships app + nginx logs) ---
curl -fsSL https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb -o /tmp/cwagent.deb
sudo dpkg -i /tmp/cwagent.deb
