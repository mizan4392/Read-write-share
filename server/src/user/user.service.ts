import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRipo: Repository<User>) {}

  createUser(body: UserDto) {
    return this.userRipo.save(body);
  }

  /**
   * 
   * @param email 
   * @param relations 
   * @returns Promise<User>
   */
  findOne(email: string, relations: string[] = []): Promise<User> {
    return this.userRipo.findOne({ where: { email }, relations });
  }

  updateUserPassword(data) {
    const obj = {
      password: data.password,
    };
    return this.userRipo.update({ id: data.id }, obj);
  }

  async updateUser(userId, data) {
    const res = await this.userRipo
      .update({ id: userId }, data)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    if (res.affected) {
      return { success: true, msg: res };
    } else {
      return { success: false, msg: res };
    }
  }
}
