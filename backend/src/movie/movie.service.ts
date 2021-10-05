import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../model/movie.entity';
import { Repository } from 'typeorm';
import { movieDto } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private readonly repo: Repository<Movie>, // Connect Movie Entity/Repository
  ) {}

  // Bring movies by isActive value
  public async getAll() {
    return await this.repo.find({ where: { isActive: true } });
  }

  //Create new movie from Db. We generally use create method from TypeORM  and  you have save to db .
  async createMovie(data: movieDto) {
    const movie = this.repo.create(data);
    await this.repo.save(data);
    return movie;
  }

  //Destroy Movie from db. We just change isActive value. From ture to false.
  async destroyMovie(id: string) {
    const movie = await this.repo.findOne({ id });
    movie.isActive = false;
    await this.repo.save(movie);
    return { deleted: true };
  }

  //Uptade movie we generally use uptade method.
  async updateMovie(id: string, data: movieDto) {
    await this.repo.update({ id }, data);
    return await this.repo.findOne({ id });
  }

  //Get movie by id. Yo can find any column from data base but you have to use where.
  async getMovieById(id: string) {
    return await this.repo.findOne({ where: { id: id } });
  }
}
