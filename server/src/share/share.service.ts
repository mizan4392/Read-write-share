import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Share } from './share.entity';

@Injectable()
export class ShareService {
  constructor(@InjectRepository(Share) private shareRipo: Repository<Share>) {}

  postShare(data) {
    return this.shareRipo.save<Share>(data);
  }

  getSharedPost(id) {
    return this.shareRipo.find({
      where: { user: id },
      relations: ['user', 'post', 'post.likes', 'post.user'],
    });
  }
}
