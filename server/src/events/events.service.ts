import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Events } from './events.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events) private readonly eventsRepo: Repository<Events>,
  ) {}

  async createEvents(data) {
    let res = await this.eventsRepo.save(data);

    if (res.id) {
      return { success: true };
    } else {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
  }

  deleteEvents(eventId) {
    return this.eventsRepo.delete({ id: eventId });
  }

  editEvents(eventId, data) {
    return this.eventsRepo.update({ id: eventId }, data);
  }
}
