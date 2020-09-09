import {
  Controller,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';
import { ShareDto } from './share.dto';
import { ShareService } from './share.service';

@Controller('share')
export class ShareController {
  constructor(private shareService: ShareService) {}

  @Post()
  @UsePipes(ValidationPipe)
  postShare(@Body() body: ShareDto) {
    return this.shareService.postShare(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getSharedPost(@Req() req) {
    return this.shareService.getSharedPost(req.user.id);
  }
}
