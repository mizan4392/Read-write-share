import {
  Controller,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeDto } from './like.dto';

@Controller('like')
export class LikeController {
  constructor(private likeService: LikeService) {}

  @Post()
  @UsePipes(ValidationPipe)
  postLike(@Body() body: LikeDto) {
    return this.likeService.postLike(body);
  }

  @Delete()
  deleteLike(@Body() body) {
    return this.likeService.deleteLike(body);
  }
}
