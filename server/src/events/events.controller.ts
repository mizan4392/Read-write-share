import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsDto } from './events.dto';
import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';
import { GetUser } from 'src/custom-decorator/get-user.decorator';
import { User } from 'src/user/user.entity';
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createEvents(@Body() body: EventsDto,@GetUser() user:User) {
    return this.eventsService.createEvents(body,user);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  fetchUserEvent(@Req() req) {
    return this.eventsService.fetchUserEvent(req.user);
  }

  @Get('global')
  @UseGuards(JwtAuthGuard)
  fetchGlobalEvent(@Req() req) {
    return this.eventsService.fetchGlobalEvent(req.user);
  }

  @Delete(':id')
  deleteEvents(@Param() id) {
    return this.eventsService.deleteEvents(id.id);
  }

  @Patch(':id')
  editEvents(@Param() id, @Body() body) {
    return this.eventsService.editEvents(id.id, body);
  }
}
