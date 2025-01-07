import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntineraryService } from './intinerary.service';
import { CreateIntineraryDto } from './dto/create-intinerary.dto';
import { UpdateIntineraryDto } from './dto/update-intinerary.dto';

@Controller('intinerary')
export class IntineraryController {
  constructor(private readonly intineraryService: IntineraryService) {}

  @Post()
  create(@Body() createIntineraryDto: CreateIntineraryDto) {
    return this.intineraryService.create(createIntineraryDto);
  }

  @Get()
  findAll() {
    return this.intineraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intineraryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntineraryDto: UpdateIntineraryDto) {
    return this.intineraryService.update(+id, updateIntineraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intineraryService.remove(+id);
  }
}
