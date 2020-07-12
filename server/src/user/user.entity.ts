import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar')
    userName:string

    @Column('varchar')
    firstName:string

    @Column('varchar')
    lastName:string

    @Column('varchar')
    address:string

    @Column('varchar')
    phone:string

    @Column('varchar')
    email:string

    @Column('varchar')
    password:string

    @Column('varchar')
    photoUrl:string

    @Column('varchar')
    interest:string

    @Column('varchar')
    bio:string

    @Column('timestamp')
    createdAt:string

    @Column('timestamp')
    updatedAt:string


}
