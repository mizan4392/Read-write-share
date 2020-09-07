import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { type } from 'os';

import { Posts } from 'src/post/post.entity';

@Entity()
export class Save extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User)
  user: User;

  @ManyToOne(type => Posts)
  post: Posts;
}
