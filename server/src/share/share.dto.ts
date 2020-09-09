import { IsEmail, IsNotEmpty } from 'class-validator';

export class ShareDto {
  @IsNotEmpty()
  user: number;

  @IsNotEmpty()
  post: number;
}
