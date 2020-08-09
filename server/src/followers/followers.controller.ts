import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersDto } from './followers.dto';

@Controller('followers')
export class FollowersController {
  constructor(private followerService: FollowersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  followUser(@Body() body: FollowersDto) {
    return this.followerService.followUser(body);
  }

  @Delete()
  unFollowUser(@Body() body) {
    return this.followerService.unfollowUser(body);
  }
}
