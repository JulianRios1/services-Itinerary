
provider "aws" {
  region = var.aws_region
}

resource "aws_dynamodb_table" "tokens" {
  name           = "Tokens"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "token"
  
  attribute {
    name = "token"
    type = "S"
  }

  ttl {
    attribute_name = "expiresAt"
    enabled        = true
  }
}

resource "aws_dynamodb_table" "flight_itineraries" {
  name           = "FlightItineraries"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"
  
  attribute {
    name = "id"
    type = "S"
  }
}