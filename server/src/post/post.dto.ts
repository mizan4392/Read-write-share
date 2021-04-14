import { IsEmail, IsNotEmpty } from 'class-validator';

export class PostDto {

  @IsNotEmpty()
  body: string;
}
