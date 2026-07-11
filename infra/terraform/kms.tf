resource "aws_kms_key" "rds" {
  description             = "Encrypts ${var.project} RDS storage at rest"
  deletion_window_in_days = 30
  enable_key_rotation     = true

  tags = { Name = "${var.project}-rds-kms" }
}

resource "aws_kms_alias" "rds" {
  name          = "alias/${var.project}-rds"
  target_key_id = aws_kms_key.rds.key_id
}
