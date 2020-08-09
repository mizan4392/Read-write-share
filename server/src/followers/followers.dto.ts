import { IsEmail, IsNotEmpty } from 'class-validator';

export class FollowersDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  follower: string;
}
