import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

import { Posts } from 'src/post/post.entity';
import { Comments } from 'src/comment/comment.entity';

@Entity()
export class ReplyComments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext', nullable: true })
  body: string;

  @ManyToOne(type => User)
  user: User;

  @ManyToOne(type => Comments)
  comment: Comments;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: string;
}
