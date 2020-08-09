import { IsEmail, IsNotEmpty } from 'class-validator';

export class EventsDto {
  @IsNotEmpty()
  title: string;

  shortDescription: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  eventType: string;

  @IsNotEmpty()
  active: boolean;

  @IsNotEmpty()
  accept: boolean;

  coverUrl: string;

  profileUrl: string;

  @IsNotEmpty()
  endDate: string;

  @IsNotEmpty()
  user: string;

  createdAt: string;

  updatedAt: string;
}
