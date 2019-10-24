import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreInfoController } from './store-info/store-info.controller';

@Module({
  imports: [],
  controllers: [AppController, StoreInfoController],
  providers: [AppService],
})
export class AppModule {}
