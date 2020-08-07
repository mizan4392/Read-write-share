import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '50' })
  userName: string;

  @Column({ type: 'varchar', length: '50' })
  firstName: string;

  @Column({ type: 'varchar', length: '50' })
  lastName: string;

  @Column({ type: 'varchar', length: '500', nullable: true })
  address: string;

  @Column({ type: 'varchar', length: '50', nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: '50' })
  email: string;

  @Column({ type: 'longtext' })
  password: string;

  @Column({ type: 'longtext', nullable: true })
  photoUrl: string;

  @Column({ type: 'longtext', nullable: true })
  interest: string;

  @Column({ type: 'longtext', nullable: true })
  bio: string;

  @Column({ type: 'timestamp', nullable: true })
  dob: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ type: 'longtext', nullable: true })
  coverPhotoUrl: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: string;
}
