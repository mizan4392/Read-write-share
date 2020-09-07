import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Delete,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './post.dto';
import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() body: PostDto) {
    return this.postService.createPost(body);
  }

  @Post('user')
  getPostForUser(@Body() body) {
    return this.postService.getPostForUser(body);
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  fetchUserPosts(@Req() req) {
    return this.postService.fetchUserPosts(req.user.id);
  }

  @Get('all')
  fetchAllPost() {
    return this.postService.fetchAllPost();
  }

  @Get(':id')
  getPostByUser(@Param() id) {
    return this.postService.getPostByUser(id.id);
  }

  @Delete(':id')
  deleteAPost(@Param() id) {
    return this.postService.deleteAPost(id.id);
  }

  @Patch(':id')
  updateUser(@Body() body, @Param() id) {
    return this.postService.updateUser(id.id, body);
  }
}
