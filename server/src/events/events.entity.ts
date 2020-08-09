import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

export enum EventType {
  CONTRIBUTE = 'CONTRIBUTE',
  SELL = 'SELL',
  OPEN_GIFT = 'OPEN_GIFT',
  BORROW = 'BORROW',
}

@Entity()
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext', nullable: true })
  title: string;

  @Column({ type: 'longtext', nullable: true })
  shortDescription: string;

  @Column({ type: 'longtext', nullable: true })
  body: string;

  @Column({ type: 'enum', enum: EventType })
  eventType: string;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'boolean' })
  accept: boolean;

  @Column({ type: 'longtext' })
  coverUrl: string;

  @Column({ type: 'longtext' })
  profileUrl: string;

  @Column({ type: 'timestamp', nullable: true })
  endDate: string;

  @ManyToOne(type => User)
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: string;
}
