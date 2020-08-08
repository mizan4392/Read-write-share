import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './config/typeorm.config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';

import { LikeModule } from './like/like.module';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { ReplyCommentController } from './reply-comment/reply-comment.controller';
import { ReplyCommentModule } from './reply-comment/reply-comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeormConfig),
    UserModule,
    AuthModule,
    PostModule,
    LikeModule,
    CommentModule,
    ReplyCommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
