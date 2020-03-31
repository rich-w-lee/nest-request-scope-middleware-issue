import { Injectable, NestMiddleware, Scope } from '@nestjs/common';
import { Request, Response } from 'express';
import { RequestScopedService } from './request-scoped.service';

@Injectable({ scope: Scope.REQUEST })
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly requestScopedService: RequestScopedService) {}

  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    console.log('Middleware: ', this.requestScopedService.uid);
    next();
  }
}
