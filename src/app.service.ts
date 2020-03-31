import { Injectable } from '@nestjs/common';
import { RequestScopedService } from './request-scoped.service';

@Injectable()
export class AppService {
  constructor(private readonly requestScopedService: RequestScopedService) {}

  getHello(): string {
    console.log('getHello', this.requestScopedService.uid);
    return 'Hello World!';
  }
}
