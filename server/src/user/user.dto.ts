import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  userName: string;

  fullName: string;

  address: string;

  phone: string;

  @IsEmail()
  email: string;

  password: string;

  photoUrl: string;

  interest: string;

  coverPhotoUrl: string;

  dob: string;

  bio: string;

  createdAt: string;

  updatedAt: string;
}
