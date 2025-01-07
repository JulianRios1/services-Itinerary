import { Module } from '@nestjs/common';
import { FlightModule } from './flight/flight.module';
import { IntineraryModule } from './intinerary/intinerary.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FlightModule, IntineraryModule, AuthModule],
})
export class AppModule {}
