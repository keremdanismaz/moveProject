import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Movie } from './movie.entity';

@Entity({ name: 'star' })
export class Star extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  surname: string;

  @Column({ type: 'varchar', length: 500 })
  bio: string;

  @Column({ type: 'varchar', length: 300 })
  imageUrl: string;

  @ManyToMany(() => Movie)
  @JoinTable()
  movies: Movie[];
}
