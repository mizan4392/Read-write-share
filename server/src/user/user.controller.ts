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
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getUserDetalies(@Req() req) {
    delete req?.user?.password;
    return req.user;
  }

  @Post('update/:id')
  updateUser(@Body() body: UserDto, @Param() id) {
    return this.userService.updateUser(id.id, body);
  }
}
