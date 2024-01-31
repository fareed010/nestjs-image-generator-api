import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Services!';
  }
}

@Injectable()
export class AppImageGenerator {
  getImageGenerator(): string {
    return 'From Generate Image route!';
  }
}
