import { Module } from '@nestjs/common';
import { NeedPhysicalService } from './needPhysical.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NeedPhysicalSchema } from './schemas/needPhysical.schema';
import { NeedPhysicalController } from './needPhysical.controller';

@Module({
  providers: [NeedPhysicalService],
  controllers: [NeedPhysicalController],
  imports: [MongooseModule.forFeature([{ name: 'NeedPhysical', schema: NeedPhysicalSchema }])],

})
export class NeedPhysicalModule {}
