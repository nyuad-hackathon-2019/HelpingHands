import { Test, TestingModule } from '@nestjs/testing';
import { NeedSkillService } from './needSkill.service';

describe('NeedSkillService', () => {
  let service: NeedSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeedSkillService],
    }).compile();

    service = module.get<NeedSkillService>(NeedSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
