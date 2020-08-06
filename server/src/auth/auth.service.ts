import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { LoginRequest } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { User } from '../user/user.entity';
import { use } from 'passport';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwt: JwtService,
    private passwordService: PasswordService,
  ) {}
  /**
   * Authenticates a user from LoginRequest and returns a JWT.
   *
   * @param request
   */
  async authenticate(request: LoginRequest) {
    const user: User = await this.usersService.findOne(request.email, []);

    if (user) {
      const passwordMatches = await this.passwordService.matches(
        request.password,
        user.password,
      );
      delete user.password;

      if (passwordMatches) {
        return { jwt: this.jwt.sign({ user }) };
      }
    }

    throw new UnauthorizedException();
  }

  async changePassword(request) {
    const user: User = await this.usersService.findOne(request.username);
    if (user) {
      const passwordMatches = await this.passwordService.matches(
        request.prevPassword,
        user.password,
      );
      if (passwordMatches) {
        var hash = await this.passwordService.hash(request.password);
        user.password = hash;
        return this.usersService.updateUserPassword(user);
      } else {
        throw new NotFoundException('Password Not Match');
      }
    }
  }

  async createUser(userData) {
    const user: User = await this.usersService.findOne(userData.email, []);

    if (user) {
      throw new HttpException('Email Already Exist', HttpStatus.CONFLICT);
    } else {
      var hash = await this.passwordService.hash(userData.password);
      userData.password = hash;
      const res = await this.usersService
        .createUser(userData)
        .then(res => {
          return res;
        })
        .catch(err => {
          return err;
        });

      if (res.id) {
        return { success: true };
      } else {
        throw new HttpException(res, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
