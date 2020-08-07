import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('update/:id')
  updateUser(@Body() body: UserDto, @Param() id) {
    return this.userService.updateUser(id.id, body);
  }
}
