import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarService } from './star.service';
import { StarController } from './star.controller';
import { Star } from '../model/star.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Star])],
  providers: [StarService],
  controllers: [StarController],
  exports: [],
})
export class StarModule {}
