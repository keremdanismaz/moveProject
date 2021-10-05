import { ApiProperty } from '@nestjs/swagger';

export class starDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdBy: string;
}

