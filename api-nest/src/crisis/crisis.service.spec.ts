import { Test, TestingModule } from '@nestjs/testing';
import { CrisisService } from './crisis.service';

describe('CrisisService', () => {
  let service: CrisisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrisisService],
    }).compile();

    service = module.get<CrisisService>(CrisisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
