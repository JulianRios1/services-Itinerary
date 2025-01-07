// src/config/dynamodb.config.ts
import { DynamoDB } from 'aws-sdk';

let dynamoDBClient: DynamoDB.DocumentClient;

try {
  dynamoDBClient = new DynamoDB.DocumentClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'local',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'local',
    },
    endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
  });
  console.log('DynamoDB client initialized successfully.');
} catch (error) {
  console.error('Error initializing DynamoDB client:', error);
  throw new Error('Failed to initialize DynamoDB client.');
}

export { dynamoDBClient };
