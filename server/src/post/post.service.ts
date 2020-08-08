import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Posts) private postRipo: Repository<Posts>) {}

  async createPost(data) {
    const res = await this.postRipo
      .save(data)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  getPostByUser(userId) {
    return this.postRipo.find({ where: { user: userId } });
  }

  deleteAPost(postId) {
    return this.postRipo.delete({ id: postId });
  }
  updateUser(postId, data) {
    return this.postRipo.update({ id: postId }, data);
  }
}