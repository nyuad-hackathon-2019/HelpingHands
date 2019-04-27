import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrisisModule } from './crisis/crisis.module';
import { CharityModule } from './charity/charity.module';
import { NeedPhysicalModule } from './needPhysical/needPhysical.module';
import { NeedSkillModule } from './needSkill/needSkill.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://dz-innov-fake-user:07dz-innov-fake-user@ds145474.mlab.com:45474/dz-innov-fake-db'),
    CrisisModule,
    CharityModule,
    NeedPhysicalModule,
    NeedSkillModule,
  ],
})
export class AppModule {}
