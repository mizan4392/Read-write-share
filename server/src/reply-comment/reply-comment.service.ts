import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReplyComments } from './reply-comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReplyCommentService {
  constructor(
    @InjectRepository(ReplyComments)
    private readonly replyCommentRipo: Repository<ReplyComments>,
  ) {}

  async postCommentReply(data) {
    const res = await this.replyCommentRipo.save(data);

    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  updateCommentReply(commentId, data) {
    return this.replyCommentRipo.update({ id: commentId }, data);
  }

  deleteCommentReply(commentId) {
    return this.replyCommentRipo.delete({ id: commentId });
  }
}
