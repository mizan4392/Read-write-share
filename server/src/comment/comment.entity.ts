import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

import { Posts } from 'src/post/post.entity';

@Entity()
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext', nullable: true })
  body: string;

  @ManyToOne(type => User)
  user: User;

  @ManyToOne(type => Posts)
  post: Posts;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: string;
}
