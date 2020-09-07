import { IsEmail, IsNotEmpty } from 'class-validator';

export class SaveDto {
  @IsNotEmpty()
  user: number;

  @IsNotEmpty()
  post: number;
}
