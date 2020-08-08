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
import { ReplyCommentService } from './reply-comment.service';

@Controller('reply-comment')
export class ReplyCommentController {
  constructor(private replyComService: ReplyCommentService) {}

  @Post()
  @UsePipes(ValidationPipe)
  postCommentReply(@Body() body) {
    return this.replyComService.postCommentReply(body);
  }

  @Patch(':id')
  updateCommentReply(@Body() body, @Param() id) {
    return this.replyComService.updateCommentReply(id.id, body);
  }

  @Delete(':id')
  deleteCommentReply(@Param() id) {
    return this.replyComService.deleteCommentReply(id.id);
  }
}
