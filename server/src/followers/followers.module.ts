import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followers } from './followers.entity';
import { FollowersController } from './followers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Followers])],
  providers: [FollowersService],
  controllers: [FollowersController],
})
export class FollowersModule {}
