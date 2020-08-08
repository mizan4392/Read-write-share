import { Module } from '@nestjs/common';
import { ReplyCommentService } from './reply-comment.service';
import { ReplyCommentController } from './reply-comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyComments } from './reply-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReplyComments])],
  providers: [ReplyCommentService],
  controllers: [ReplyCommentController],
})
export class ReplyCommentModule {}
