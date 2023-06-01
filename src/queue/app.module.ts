import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import database from '../config/database';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(database())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
