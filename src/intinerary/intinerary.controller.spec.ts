import { Test, TestingModule } from '@nestjs/testing';
import { IntineraryController } from './intinerary.controller';
import { IntineraryService } from './intinerary.service';

describe('IntineraryController', () => {
  let controller: IntineraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntineraryController],
      providers: [IntineraryService],
    }).compile();

    controller = module.get<IntineraryController>(IntineraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
