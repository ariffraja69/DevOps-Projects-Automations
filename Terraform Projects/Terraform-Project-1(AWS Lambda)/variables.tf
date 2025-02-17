variable "s3_bucket" {
  description = "S3 bucket containing lambda code"
  default     = "notes-app-uploads-cloudxpert"
}

variable "s3_key" {
  description = "Name of the file containing the lambda code"
  default     = "app.js.zip"
}

variable "aws_region" {
  description = "The AWS region where the lambda code needs to be deployed"
  default     = "us-east-1"
}

variable "aws_cli_profile" {
  description = "The AWS CLI profile terraform should use to authenticate with AWS"
  default     = "default"
}