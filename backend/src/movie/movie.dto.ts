import { ApiProperty } from '@nestjs/swagger';

export class movieDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  createdBy: string;

}

// Movie Dto we can use dto because transfer object. 