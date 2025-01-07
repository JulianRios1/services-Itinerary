import { PartialType } from '@nestjs/swagger';
import { CreateIntineraryDto } from './create-intinerary.dto';

export class UpdateIntineraryDto extends PartialType(CreateIntineraryDto) {}
