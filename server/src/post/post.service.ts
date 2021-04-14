import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Posts) private postRipo: Repository<Posts>) {}

  async createPost(data,user) {
    data.user = user.id
    const res = await this.postRipo.save(data)
    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  fetchAllPost() {
    return this.postRipo.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
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

  async getPostForUser(data) {
    let id = data.userId;

    return this.postRipo.find({
      relations: ['user', 'likes', 'likes.user', 'likes.post'],
      order: { createdAt: 'DESC' },
    });
  }

  async fetchUserPosts(userId) {
    return this.postRipo.find({
      where: { user: userId },
      relations: ['user', 'likes', 'likes.user'],
      order: { createdAt: 'DESC' },
    });
  }
}
