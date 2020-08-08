import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from './comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
