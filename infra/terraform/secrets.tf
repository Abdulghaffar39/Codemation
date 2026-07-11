# Replaces backend/.env in production. The EC2 instance role (iam.tf) is granted
# read-only access to exactly this secret — nothing else.

resource "aws_secretsmanager_secret" "app" {
  name        = "${var.project}/${var.environment}/app"
  description = "Runtime secrets for the Codemation backend (replaces .env)"
  kms_key_id  = aws_kms_key.rds.id
}

resource "aws_secretsmanager_secret_version" "app" {
  secret_id = aws_secretsmanager_secret.app.id

  secret_string = jsonencode({
    DB_HOST     = aws_db_instance.main.address
    DB_PORT     = tostring(aws_db_instance.main.port)
    DB_NAME     = var.db_name
    DB_USER     = var.db_username
    DB_PASSWORD = var.db_password
    JWT_SECRET  = var.jwt_secret
    EMAIL_USER  = var.email_user
    EMAIL_PASS  = var.email_pass
    NODE_ENV    = "production"
    PORT        = "5000"
  })
}
