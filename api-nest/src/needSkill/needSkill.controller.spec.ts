import { Test, TestingModule } from '@nestjs/testing';
import { NeedSkillController } from './needSkill.controller';

describe('NeedSkill Controller', () => {
  let controller: NeedSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeedSkillController],
    }).compile();

    controller = module.get<NeedSkillController>(NeedSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
