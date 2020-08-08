import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from './comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments)
    private readonly comentRipo: Repository<Comments>,
  ) {}

  async postComment(data) {
    const res = await this.comentRipo.save(data);

    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  updateComment(commentId, data) {
    return this.comentRipo.update({ id: commentId }, data);
  }

  deleteComment(commentId) {
    return this.comentRipo.delete({ id: commentId });
  }
}
