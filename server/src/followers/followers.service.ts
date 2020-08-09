import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Followers } from './followers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FollowersService {
  constructor(
    @InjectRepository(Followers)
    private readonly followerRipo: Repository<Followers>,
  ) {}

  async followUser(data) {
    let res = await this.followerRipo.save(data);

    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  unfollowUser(data) {
    return this.followerRipo.delete(data);
  }
}
