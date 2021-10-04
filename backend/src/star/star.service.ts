import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Star } from '../model/star.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StarService {
  constructor(
    @InjectRepository(Star) private readonly repo: Repository<Star>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }
}
