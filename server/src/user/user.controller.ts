import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  UseGuards,
  Get,
  Req,
  Patch,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getUserDetails(@Req() req) {
    return this.userService.getUserDetails(req.user.id)
  }

  @Patch()
  updateUser(@Body() body) {
    return this.userService.updateUser(body.id, body);
  }

  @Post('singlePhoto')
  @UseInterceptors(FileInterceptor('file'))
  uploadSinglePhoto(@UploadedFile() file) {
    
    return this.userService.uploadSinglePhoto(file);
  }

  


}
