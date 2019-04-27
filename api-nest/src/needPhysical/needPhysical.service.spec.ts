import { Test, TestingModule } from '@nestjs/testing';
import { NeedPhysicalService } from './needPhysical.service';

describe('NeedPhysicalService', () => {
  let service: NeedPhysicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeedPhysicalService],
    }).compile();

    service = module.get<NeedPhysicalService>(NeedPhysicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
