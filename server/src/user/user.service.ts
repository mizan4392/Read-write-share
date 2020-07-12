import { Injectable } from '@nestjs/common';
import {UserDto} from "./user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRipo:Repository<User>
    ) {
    }


    createUser(body:UserDto){

        return this.userRipo.save(body)
    }
}
