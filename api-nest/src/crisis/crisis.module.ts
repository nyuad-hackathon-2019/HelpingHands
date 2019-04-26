import { Module } from '@nestjs/common';
import { CrisisService } from './crisis.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrisisSchema } from './schemas/crisis.schema';
import { CrisisController } from './crisis.controller';

@Module({
  providers: [CrisisService],
  controllers: [CrisisController],
  imports: [MongooseModule.forFeature([{ name: 'Crisis', schema: CrisisSchema }])],

})
export class CrisisModule {}
