import { IsEmail, IsNotEmpty } from 'class-validator';

export class EventsDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  des: string;

  @IsNotEmpty()
  eventType: string;

  active: boolean;

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
