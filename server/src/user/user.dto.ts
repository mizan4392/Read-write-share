import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  userName: string;

  firstName: string;

  lastName: string;

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
