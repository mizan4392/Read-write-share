import { IsEmail, IsNotEmpty } from 'class-validator';

export class LikeDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  post: string;
}
