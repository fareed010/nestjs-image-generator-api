import { Controller, Get } from '@nestjs/common';
import { AppService, AppImageGenerator } from '../Services/app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appImageGenerator: AppImageGenerator,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/image')
  getImageGenerator(): string {
    return this.appImageGenerator.getImageGenerator();
  }
}
