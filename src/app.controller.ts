import { Controller, Get } from '@nestjs/common';
import { appService } from './app.service';

@Controller()
export class appController {
  constructor(private readonly appService: appService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
