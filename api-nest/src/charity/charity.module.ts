import { Module } from '@nestjs/common';
import { CharityService } from './charity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharitySchema } from './schemas/charity.schema';
import { CharityController } from './charity.controller';

@Module({
  providers: [CharityService],
  controllers: [CharityController],
  imports: [MongooseModule.forFeature([{ name: 'Charity', schema: CharitySchema }])],

})
export class CharityModule {}
