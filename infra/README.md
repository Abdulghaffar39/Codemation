# Codemation — AWS Infrastructure as Code

This directory holds the Terraform + Packer definitions for the architecture described
in the AWS Deployment Guide. **Nothing here has been run.** These are files only —
no AWS resources exist until someone with AWS credentials runs the commands below.

No custom domain is configured — the site is served over HTTP directly at the load
balancer's own DNS name (`<something>.elb.amazonaws.com`, shown as `site_url` in the
Terraform output once applied). A domain + HTTPS can be added later.

## Layout

```
infra/
  terraform/     # VPC, ALB, ASG, RDS, Secrets Manager, CloudWatch, KMS, IAM
  packer/        # Builds the "golden AMI" (Node + Nginx + your app) used by the ASG
.github/workflows/deploy.yml   # CI: test -> build frontend -> bake AMI -> terraform apply
```

## One-time setup, in order

### 1. AWS account
Create one at aws.amazon.com if you don't have one, with a billing method attached.

### 2. Remote state bucket (must exist before CI/CD can run repeatedly)
GitHub Actions runners are thrown away after every run, so Terraform's state file
can't live on the runner's disk — it needs to live in AWS itself (an S3 bucket), or
every run would try to recreate everything from scratch. Create it once, from your
own machine, with the AWS CLI:

```bash
aws s3api create-bucket --bucket codemation-terraform-state --region us-east-1
aws s3api put-bucket-versioning --bucket codemation-terraform-state \
  --versioning-configuration Status=Enabled

aws dynamodb create-table --table-name codemation-terraform-locks \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST --region us-east-1
```

Then uncomment the `backend "s3" {}` block in `infra/terraform/versions.tf` (bucket
name must match exactly what you created above), and run `terraform init` once from
your machine to migrate to it.

### 3. GitHub OIDC role (lets GitHub Actions deploy without storing AWS keys as secrets)

```bash
# a) Register GitHub's OIDC provider with your AWS account (once per account)
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1

# b) Create the role GitHub Actions will assume — replace ACCOUNT_ID and
#    YOUR_GITHUB_USER/YOUR_REPO below
cat > trust-policy.json <<'EOF'
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com" },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": { "token.actions.githubusercontent.com:aud": "sts.amazonaws.com" },
      "StringLike": { "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_USER/YOUR_REPO:ref:refs/heads/main" }
    }
  }]
}
EOF

aws iam create-role --role-name codemation-github-deploy \
  --assume-role-policy-document file://trust-policy.json

# For a first deploy, attaching AdministratorAccess is the fastest way to get moving —
# tighten this to the exact services in infra/terraform once everything works.
aws iam attach-role-policy --role-name codemation-github-deploy \
  --policy-arn arn:aws:iam::aws:policy/AdministratorAccess
```

Copy the resulting role ARN (`aws iam get-role --role-name codemation-github-deploy
--query Role.Arn`) — you'll need it in step 4.

### 4. GitHub repository secrets
In the GitHub repo → **Settings → Secrets and variables → Actions**, add:

| Secret | Value |
|---|---|
| `AWS_DEPLOY_ROLE_ARN` | the role ARN from step 3 |
| `DB_PASSWORD` | a new MySQL password for production (don't reuse your local dev one) |
| `JWT_SECRET` | same value as `backend/.env` today, or generate a new random one |
| `EMAIL_USER` | `codemation.offical@gmail.com` |
| `EMAIL_PASS` | the Gmail app password from `backend/.env` |

After this, `backend/.env` is only used for local development — production reads
these same values from AWS Secrets Manager instead (`infra/terraform/secrets.tf`).

### 5. Push to `main`
That's it — `.github/workflows/deploy.yml` runs automatically: tests → builds the
frontend → bakes a new AMI with Packer → `terraform apply`. Watch progress in the
repo's **Actions** tab. The first run takes the longest (creating the VPC, RDS, etc.
from scratch, RDS alone takes ~10 minutes) — after that, `terraform apply` only
changes what's different.

When it finishes, find the site's URL in the `terraform apply` step's output —
look for the `site_url` output value, or check the target group in the AWS Console
if you don't want to dig through logs.

## Redeploying after a code change

Just push to `main` again. Same pipeline: new AMI baked with your new code, Terraform
updates the Launch Template, and the Auto Scaling Group does a rolling **instance
refresh** — old instances replaced one at a time behind the load balancer, so the
site never goes down during a deploy.

## What's intentionally not automated

- Creating the AWS account itself (step 1)
- The remote state bucket / OIDC role (steps 2–3) — one-time, human-run, since CI
  needs them to already exist before it can do anything
- Adding a custom domain later: register/point a domain at Route 53, request an ACM
  certificate, add a `:443` listener on the ALB using that cert, and a `:80` → `:443`
  redirect — worth doing once the site is confirmed working over plain HTTP
