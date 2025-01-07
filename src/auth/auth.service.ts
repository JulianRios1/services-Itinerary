// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { dynamoDBClient } from '../config/dynamodb.config';

interface UserCredentials {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Generate JWT token
  async login(user: UserCredentials) {
    // In a real application, validate credentials against a user database
    const payload = { username: user.username, sub: 'userId' };
    
    // Generate JWT token
    const token = this.jwtService.sign(payload);
    
    // Save token to DynamoDB
    await this.saveToken(payload.sub, token);
    
    return {
      access_token: token,
    };
  }

  // Save token to DynamoDB
  async _saveToken(userId: string, token: string) {
    const params = {
      TableName: 'Tokens',
      Item: {
        token,
        userId,
        createdAt: new Date().toISOString(),
        expiresAt: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours from now
      },
    };
    console.log(params)
    try {
      await dynamoDBClient.put(params).promise();
    } catch (error) {
      throw new Error('Failed to save token');
    }
  }

  // Validate token from DynamoDB
  async validateToken(token: string) {
    try {
      // First verify the JWT signature
      const payload = this.jwtService.verify(token);
      
      // Then check if token exists in DynamoDB
      const params = {
        TableName: 'Tokens',
        Key: { token },
      };

      const result = await dynamoDBClient.get(params).promise();
      
      if (!result.Item) {
        throw new UnauthorizedException('Token not found');
      }

      // Check if token is expired
      if (result.Item.expiresAt < Math.floor(Date.now() / 1000)) {
        throw new UnauthorizedException('Token expired');
      }

      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  // Revoke token (logout)
  async revokeToken(token: string) {
    const params = {
      TableName: 'Tokens',
      Key: { token },
    };

    try {
      await dynamoDBClient.delete(params).promise();
      return { message: 'Token revoked successfully' };
    } catch (error) {
      throw new Error('Failed to revoke token');
    }
  }

  async saveToken(userId: string, token: string) {
    try {
      console.log('Attempting to save token:', { userId, token });
      
      const params = {
        TableName: 'Tokens',
        Item: {
          token,
          userId,
          createdAt: new Date().toISOString(),
          expiresAt: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
        },
      };

      console.log('DynamoDB params:', JSON.stringify(params, null, 2));
      const result = await dynamoDBClient.put(params).promise();
      console.log('DynamoDB result:', result);
      
      return result;
    } catch (error) {
      console.error('DynamoDB Error:', error);
      //throw new InternalServerErrorException(`Failed to save token: ${error.message}`);
    }
  }
}
