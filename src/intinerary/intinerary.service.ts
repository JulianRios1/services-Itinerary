import { Injectable } from '@nestjs/common';
import { CreateIntineraryDto } from './dto/create-intinerary.dto';
import { UpdateIntineraryDto } from './dto/update-intinerary.dto';

@Injectable()
export class IntineraryService {
  create(createIntineraryDto: CreateIntineraryDto) {
    return 'This action adds a new intinerary';
  }

  findAll() {
    return `This action returns all intinerary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intinerary`;
  }

  update(id: number, updateIntineraryDto: UpdateIntineraryDto) {
    return `This action updates a #${id} intinerary`;
  }

  remove(id: number) {
    return `This action removes a #${id} intinerary`;
  }
}
