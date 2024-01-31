import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService, AppImageGenerator } from './Services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppImageGenerator],
})
export class AppModule {}
