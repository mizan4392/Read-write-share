import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Save } from './save.entity';
import { SaveService } from './save.service';
import { SaveController } from './save.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Save])],
  providers: [SaveService],
  controllers: [SaveController],
})
export class SaveModule {}
