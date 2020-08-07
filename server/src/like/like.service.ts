import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Likes } from './like.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LikeService {
  constructor(@InjectRepository(Likes) private likeRipo: Repository<Likes>) {}
  async postLike(data) {
    const res = await this.likeRipo.save(data);

    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  deleteLike(data) {
    this.likeRipo.delete(data);
  }
}
