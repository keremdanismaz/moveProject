import { Controller, Get } from '@nestjs/common';
import { StarService } from './star.service';

@Controller('star')
export class StarController {
  constructor(private serv: StarService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }
}
