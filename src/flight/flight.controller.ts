// src/flight/flight.controller.ts
import { Controller, Post, Body, UseGuards, BadRequestException } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiTags('flights')
@Controller('flights')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new flight itinerary' })
  @ApiResponse({ status: 201, description: 'Itinerary created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createFlight(@Body() createFlightDto: CreateFlightDto) {
    try {
      return await this.flightService.create(createFlightDto);
    } catch (error) {
      throw new BadRequestException('Failed to create itinerary');
    }
  }
}