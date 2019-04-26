import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrisisModule } from './crisis/crisis.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://dz-innov-fake-user:07dz-innov-fake-user@ds145474.mlab.com:45474/dz-innov-fake-db'),
    CrisisModule,

  ],
})
export class AppModule {}
