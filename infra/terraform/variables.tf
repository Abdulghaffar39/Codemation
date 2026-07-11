variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "project" {
  description = "Short name used to prefix/tag all resources"
  type        = string
  default     = "codemation"
}

variable "environment" {
  description = "Environment name (prod, staging, ...)"
  type        = string
  default     = "prod"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidrs" {
  description = "CIDRs for the two public subnets (ALB + EC2)"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnet_cidrs" {
  description = "CIDRs for the two private subnets (RDS only)"
  type        = list(string)
  default     = ["10.0.11.0/24", "10.0.12.0/24"]
}

variable "availability_zones" {
  description = "Two AZs to spread subnets/instances across"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}

variable "ami_id" {
  description = "AMI ID produced by the Packer build (infra/packer). Passed in at apply time: -var ami_id=ami-xxxx"
  type        = string

  validation {
    condition     = can(regex("^ami-[0-9a-f]+$", var.ami_id))
    error_message = "ami_id must be a valid AMI id (e.g. ami-0123456789abcdef0) — got an empty or malformed value. This usually means the upstream Packer build step failed to produce an AMI."
  }
}

variable "instance_type" {
  description = "EC2 instance type for the app servers"
  type        = string
  default     = "t3.micro"
}

variable "asg_min_size" {
  type    = number
  default = 2
}

variable "asg_max_size" {
  type    = number
  default = 4
}

variable "asg_desired_capacity" {
  type    = number
  default = 2
}

variable "db_name" {
  type    = string
  default = "codemation"
}

variable "db_username" {
  description = "RDS master username"
  type        = string
  default     = "codemation_app"
}

variable "db_password" {
  description = "RDS master password. Pass via TF_VAR_db_password env var or a tfvars file that is NOT committed to git."
  type        = string
  sensitive   = true
}

variable "db_instance_class" {
  type    = string
  default = "db.t3.micro"
}

variable "jwt_secret" {
  description = "Value stored in Secrets Manager for the app's JWT_SECRET"
  type        = string
  sensitive   = true
}

variable "email_user" {
  description = "Gmail address used by nodemailer"
  type        = string
}

variable "email_pass" {
  description = "Gmail app password used by nodemailer. Pass via TF_VAR_email_pass."
  type        = string
  sensitive   = true
}
