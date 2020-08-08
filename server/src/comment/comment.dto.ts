import { IsNotEmpty } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  post: string;
}
