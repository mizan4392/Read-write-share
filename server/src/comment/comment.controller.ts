import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @UsePipes(ValidationPipe)
  postComment(@Body() body) {
    return this.commentService.postComment(body);
  }

  @Patch(':id')
  updateComment(@Body() body, @Param() id) {
    return this.commentService.updateComment(id.id, body);
  }

  @Delete(':id')
  deleteComment(@Param() id) {
    return this.commentService.deleteComment(id.id);
  }
}
