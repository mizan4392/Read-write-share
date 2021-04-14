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
import { GetUser } from 'src/custom-decorator/get-user.decorator';
import { User } from './user.entity';

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
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  uploadSinglePhoto(@UploadedFile() file,@GetUser() user:User,@Body('type') type) {
   
    return this.userService.uploadSinglePhoto(file,user,JSON.parse(type));
  }

  


}
