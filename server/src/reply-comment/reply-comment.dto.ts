import { IsNotEmpty } from 'class-validator';

export class ReplyComments {
  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  comment: string;
}
