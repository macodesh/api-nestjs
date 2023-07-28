import { Injectable } from '@nestjs/common';

// O decorator @Injectable() é usado para marcar a classe como um provedor (service) no Nest.js.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
