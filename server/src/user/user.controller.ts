import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserDto} from "./user.dto";

@Controller('user')
export class UserController {

    constructor(private  userService:UserService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() body:UserDto){
        return this.userService.createUser(body)
    }
}
