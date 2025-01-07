import { Module } from '@nestjs/common';
import { IntineraryService } from './intinerary.service';
import { IntineraryController } from './intinerary.controller';

@Module({
  controllers: [IntineraryController],
  providers: [IntineraryService],
})
export class IntineraryModule {}
