import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Likes } from './like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Likes])],
  providers: [LikeService],
  controllers: [LikeController],
})
export class LikeModule {}
