import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../model/movie.entity';
import { Repository } from 'typeorm';
import { movieDto } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private readonly repo: Repository<Movie>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }

  async createMovie(data: movieDto) {
    const movie = this.repo.create(data);
    await this.repo.save(data);
    return movie;
  }
}
