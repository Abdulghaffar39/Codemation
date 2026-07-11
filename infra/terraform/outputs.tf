output "alb_dns_name" {
  value = aws_lb.main.dns_name
}

output "rds_endpoint" {
  value     = aws_db_instance.main.address
  sensitive = true
}

output "app_secret_arn" {
  value = aws_secretsmanager_secret.app.arn
}

output "site_url" {
  value = "http://${aws_lb.main.dns_name}"
}
