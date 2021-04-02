import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
  Patch,
  Param,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt_auth.guard';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/user.dto';

export interface LoginRequest {
  email: string;
  password: string;
}

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private us: UserService, private as: AuthService) {}

  @Post('/login')
  async login(@Body() req: LoginRequest) {
    return this.as.authenticate(req);
  }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() body: UserDto) {
    return this.as.createUser(body);
  }

  @Post('changePass')
  updatePassword(@Body() body) {
    return this.as.changePassword(body);
  }

}
