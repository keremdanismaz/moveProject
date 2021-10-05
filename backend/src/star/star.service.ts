import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Star } from '../model/star.entity';
import { Repository } from 'typeorm';
import { starDto } from './star.dto';

@Injectable()
export class StarService {
  constructor(
    @InjectRepository(Star) private readonly repo: Repository<Star>,
  ) {}

  // Bring star by isActive value
  async getAll() {
    return await this.repo.find({ where: { isActive: true } });
  }

  //Create new star from Db. We generally use create method from TypeORM  and  you have save to db .
  async createStar(data: starDto) {
    const star = this.repo.create(data);
    await this.repo.save(data);
    return star;
  }

  //Destroy Star from db. We just change isActive value. From ture to false.
  async destroyStar(id: string) {
    const star = await this.repo.findOne({ id });
    star.isActive = false;
    await this.repo.save(star);
    return { deleted: true };
  }

  //Uptade Star we generally use uptade method.
  async updateStar(id: string, data: starDto) {
    await this.repo.update({ id }, data);
    return await this.repo.findOne({ id });
  }

  //Get Star by id. Yo can find any column from data base but you have to use where.
  async getStarById(id: string) {
    return await this.repo.findOne({ where: { id: id } });
  }
}
