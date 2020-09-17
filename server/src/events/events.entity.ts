import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

export enum EventType {
  Sell = 'Sell',
  Borrow = 'Borrow',
  Gift = 'Gift',
  Donate = 'Donate',
  Request = 'Request',
}

@Entity()
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext', nullable: true })
  title: string;

  @Column({ type: 'longtext', nullable: true })
  des: string;

  @Column({ type: 'enum', enum: EventType })
  eventType: string;

  @Column({ type: 'boolean', nullable: true })
  active: boolean;

  @Column({ type: 'boolean', nullable: true })
  accept: boolean;

  @Column({ type: 'longtext', nullable: true })
  coverUrl: string;

  @Column({ type: 'longtext', nullable: true })
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
