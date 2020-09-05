import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { Likes } from 'src/like/like.entity';
@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ type: 'longtext', nullable: true })
  // title: string;

  @Column({ type: 'longtext', nullable: true })
  body: string;

  @ManyToOne(type => User)
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: string;

  @OneToMany(
    type => Likes,
    l => l.post,
  )
  likes: Likes[];
}
