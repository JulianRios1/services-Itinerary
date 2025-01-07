import { Test, TestingModule } from '@nestjs/testing';
import { IntineraryService } from './intinerary.service';

describe('IntineraryService', () => {
  let service: IntineraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntineraryService],
    }).compile();

    service = module.get<IntineraryService>(IntineraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
