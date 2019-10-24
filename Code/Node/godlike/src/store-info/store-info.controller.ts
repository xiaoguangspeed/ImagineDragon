import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('store-info')
export class StoreInfoController {
  @Get()
  getInfo(): string{
    return '卢家钧窑'
  }
}
