import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1633307706329 implements MigrationInterface {
  name = 'Initial1633307706329';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "tite"`);
    await queryRunner.query(
      `ALTER TABLE "movie" ADD "title" character varying(300)`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie" ADD "trailerUrl" character varying(300)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "trailerUrl"`);
    await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "title"`);
    await queryRunner.query(
      `ALTER TABLE "movie" ADD "tite" character varying(300) NOT NULL`,
    );
  }
}
