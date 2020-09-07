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

import { SaveService } from './save.service';
import { SaveDto } from './save.dto';
import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';

@Controller('save')
export class SaveController {
  constructor(private saveService: SaveService) {}

  @Post()
  @UsePipes(ValidationPipe)
  postSave(@Body() body: SaveDto) {
    return this.saveService.postSave(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getSavedPost(@Req() req) {
    return this.saveService.getSavedPost(req.user.id);
  }
}
