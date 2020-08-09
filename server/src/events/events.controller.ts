import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsDto } from './events.dto';
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createEvents(@Body() body: EventsDto) {
    return this.eventsService.createEvents(body);
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
