// src/flight/dto/create-flight.dto.ts
import { IsString, IsNumber, IsDate, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum FlightType {
  CHARTER = 'Charter',
  CARGO = 'Cargo'
}

export enum FlightStatus {
  SCHEDULED = 'Scheduled',
  DELAYED = 'Delayed',
  CANCELLED = 'Cancelled'
}

export class CreateFlightDto {
  @ApiProperty()
  @IsString()
  idVuelo: string;

  @ApiProperty({ enum: FlightType })
  @IsEnum(FlightType)
  tipoVuelo: FlightType;

  @ApiProperty()
  @IsString()
  observaciones: string;

  @ApiProperty({ enum: FlightStatus })
  @IsEnum(FlightStatus)
  estadoVuelo: FlightStatus;

  @ApiProperty()
  @IsNumber()
  cantidadTripulantes: number;

  @ApiProperty()
  @IsNumber()
  pesoCarga: number;

  @ApiProperty()
  @IsNumber()
  cantidadPasajeros: number;

  @ApiProperty()
  @IsDate()
  fechaSalida: Date;

  @ApiProperty()
  @IsString()
  rutaVouchers: string;

  @ApiProperty()
  @IsString()
  rutaAprobacionAerocivil: string;

  @ApiProperty()
  @IsString()
  destino: string;
}
