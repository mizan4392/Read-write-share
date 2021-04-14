import { Module } from '@nestjs/common';
import { AssetService } from './assets.service';
import { StorageService } from './storage.service';

@Module({
  providers: [StorageService,AssetService],
  exports:[StorageService,AssetService],

})
export class StorageModule {}
