import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { starDto } from './star.dto';
import { StarService } from './star.service';

@Controller('star')
export class StarController {
  constructor(private serv: StarService) {}

  //Get All Star from service getAll() method.
  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  //Get Star By id from service getMovieById() method.
  @Get(':id')
  async readStarById(@Param('id') id: string) {
    const data = await this.serv.getStarById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Star fetched successfully',
      data,
    };
  }

  //Create new star from service createMovie() method.
  @Post()
  async createStar(@Body() data: starDto) {
    const movie = await this.serv.createStar(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Star created successfully',
      user: movie,
    };
  }

  //Delete star from Db
  @Delete(':id')
  async deleteStar(@Param('id') id: string) {
    await this.serv.destroyStar(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Star deleted successfully',
    };
  }

  //Uptade star with new data
  @Patch(':id')
  async updateStar(@Param('id') id: string, @Body() data: starDto) {
    await this.serv.updateStar(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Star updated successfully',
    };
  }
}
