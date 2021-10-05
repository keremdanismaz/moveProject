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
import { MovieService } from './movie.service';
import { movieDto } from './movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private serv: MovieService) {} //Connect movie Service 

  //Get All Movie from service getAll() method.
  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  //Get movie By id from service getMovieById() method.
  @Get(':id')
  async readMovieById(@Param('id') id: string) {
    const data = await this.serv.getMovieById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movie fetched successfully',
      data,
    };
  }

  //Create new movie from service createMovie() method.
  @Post()
  async createMovie(@Body() data: movieDto) {
    const movie = await this.serv.createMovie(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movie created successfully',
      user: movie,
    };
  }

  //Delete movie from Db
  @Delete(':id')
  async deleteMovie(@Param('id') id: string) {
    await this.serv.destroyMovie(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movie deleted successfully',
    };
  }

  //Uptade movie with new data
  @Patch(':id')
  async uppdateMovie(@Param('id') id: string, @Body() data: movieDto) {
    await this.serv.updateMovie(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Movie updated successfully',
    };
  }
}
