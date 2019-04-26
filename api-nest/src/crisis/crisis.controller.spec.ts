import { Test, TestingModule } from '@nestjs/testing';
import { CrisisController } from './crisis.controller';

describe('Crisis Controller', () => {
  let controller: CrisisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrisisController],
    }).compile();

    controller = module.get<CrisisController>(CrisisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
