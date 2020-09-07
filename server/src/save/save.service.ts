import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Save } from './save.entity';

@Injectable()
export class SaveService {
  constructor(@InjectRepository(Save) private saveRipo: Repository<Save>) {}

  postSave(data) {
    return this.saveRipo.save<Save>(data);
  }

  getSavedPost(id) {
    return this.saveRipo.find({ where: { user: id } });
  }
}
