import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

import { AssetService } from 'src/storage/assets.service';

export enum UploadTypeE {
  cover = 'cover',
  profile = 'profile',
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRipo: Repository<User>,
    private readonly assets:AssetService
    ) {}

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

 async getUserDetails(userId){
    let user = await this.userRipo.findOne({id:userId})
    delete user.password
    return user
  }

  async uploadSinglePhoto(file,user:User,uploadType:{type:string}){
    if(uploadType.type === UploadTypeE.cover){
     let filepath = await  this.assets.saveCoverPic(file,file.originalname)
     console.log("filepath",filepath)
     if(filepath){
      return this.userRipo.update({id:user.id},{coverPhotoUrl:filepath})
     }
    }else{
      let filepath = await  this.assets.saveProfilePic(file,file.originalname)
      if(filepath){
        return this.userRipo.update({id:user.id},{photoUrl:filepath})
      }
    }
  }
}
