import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Share } from './share.entity';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Share])],
  providers: [ShareService],
  controllers: [ShareController],
})
export class ShareModule {}
