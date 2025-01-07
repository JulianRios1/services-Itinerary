import { Injectable } from '@nestjs/common';
import { dynamoDBClient } from '../config/dynamodb.config';
import { CreateFlightDto } from './dto/create-flight.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FlightService {
  async create(createFlightDto: CreateFlightDto) {
    const flightId = uuidv4();
    const params = {
      TableName: 'FlightItineraries',
      Item: {
        id: flightId,
        ...createFlightDto,
        createdAt: new Date().toISOString(),
      },
    };

    await dynamoDBClient.put(params).promise();
    return { id: flightId, ...createFlightDto };
  }

  async findAll() {
    const params = {
      TableName: 'FlightItineraries',
    };

    const result = await dynamoDBClient.scan(params).promise();
    return result.Items;
  }

  async findOne(id: string) {
    const params = {
      TableName: 'FlightItineraries',
      Key: { id },
    };

    const result = await dynamoDBClient.get(params).promise();
    return result.Item;
  }
}