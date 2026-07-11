packer {
  required_plugins {
    amazon = {
      source  = "github.com/hashicorp/amazon"
      version = "~> 1.3"
    }
  }
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

source "amazon-ebs" "codemation" {
  ami_name      = "codemation-{{timestamp}}"
  instance_type = var.instance_type
  region        = var.aws_region

  source_ami_filter {
    filters = {
      name                = "ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
    }
    owners      = ["099720109477"] # Canonical
    most_recent = true
  }

  ssh_username = "ubuntu"

  tags = {
    Name    = "codemation-app"
    Project = "codemation"
  }
}

build {
  name    = "codemation"
  sources = ["source.amazon-ebs.codemation"]

  # Application code (frontend build output + backend source) copied in from the
  # CI workspace right before this runs — see .github/workflows/deploy.yml
  provisioner "file" {
    source      = "../../frontend/dist"
    destination = "/tmp/frontend-dist"
  }

  provisioner "file" {
    source      = "../../backend"
    destination = "/tmp/backend"
  }

  provisioner "shell" {
    script = "scripts/provision.sh"
  }
}
