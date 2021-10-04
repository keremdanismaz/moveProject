import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { MovieService } from './movie.service';
import { movieDto } from './movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private serv: MovieService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post()
  async createMovie(@Body() data: movieDto) {
    const movie = await this.serv.createMovie(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movie created successfully',
      user: movie,
    };
  }
}
