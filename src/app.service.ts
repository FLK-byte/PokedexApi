import { Injectable } from '@nestjs/common';

@Injectable()
export class appService {
  getHello() {
    return 'Hello World'
  }
}
