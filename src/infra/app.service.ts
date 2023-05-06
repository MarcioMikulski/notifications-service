import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getola(): string {
    return 'Fundamentos NestJS';
  }
}
