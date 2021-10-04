import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'movie' })
export class Movie extends BaseEntity {
  @Column({ type: 'varchar', length: 300, nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'integer' })
  year: number;

  @Column({ type: 'varchar', length: 300 })
  imageUrl: string;

  @Column({ type: 'float' })
  rating: number;

  @Column({ type: 'varchar', length: 300 })
  duration: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  trailerUrl: string;
}
