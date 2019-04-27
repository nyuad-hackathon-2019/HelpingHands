import { Module } from '@nestjs/common';
import { NeedSkillService } from './needSkill.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NeedSkillSchema } from './schemas/needSkill.schema';
import { NeedSkillController } from './needSkill.controller';

@Module({
  providers: [NeedSkillService],
  controllers: [NeedSkillController],
  imports: [MongooseModule.forFeature([{ name: 'NeedSkill', schema: NeedSkillSchema }])],

})
export class NeedSkillModule {}
