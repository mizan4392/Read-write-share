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
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createEvents(@Body() body: EventsDto) {
    return this.eventsService.createEvents(body);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  fetchUserEvent(@Req() req) {
    return this.eventsService.fetchUserEvent(req.user);
  }

  @Get('global')
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
