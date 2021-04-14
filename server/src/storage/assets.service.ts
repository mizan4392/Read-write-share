import { Injectable } from '@nestjs/common';
import { StorageService } from './storage.service';
import { v4 as uuidv4 } from 'uuid';

export const getAUUID = () => uuidv4();

@Injectable()
export class AssetService {

    constructor(
        private storage: StorageService,
    ) { }


    /**
     * 
     * @param file 
     * @param filename 
     * @returns 
     */
    async saveProfilePic(file, filename) :Promise<string >{
        return this.saveAsset(file, filename, 'user_profile');
    }

    /**
     * 
     * @param file 
     * @param filename 
     * @returns 
     */
    async saveCoverPic(file, filename) :Promise<string >{
        return this.saveAsset(file, filename, 'user_cover');
    }

    private async saveAsset(file, filename, type) {
        filename = getAUUID() + '_' + filename;
        const folder = type + "/"
        const path = folder + filename;
        return this.storage.putFile(file, path);
    }
}
