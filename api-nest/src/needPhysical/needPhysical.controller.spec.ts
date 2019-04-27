import { Test, TestingModule } from '@nestjs/testing';
import { NeedPhysicalController } from './needPhysical.controller';

describe('NeedPhysical Controller', () => {
  let controller: NeedPhysicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeedPhysicalController],
    }).compile();

    controller = module.get<NeedPhysicalController>(NeedPhysicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
