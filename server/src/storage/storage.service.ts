import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';
// var serviceAccount = require("../config/serviceAccount.json");
@Injectable()
export class StorageService {
    private storage;


    constructor() {
        if (process.env.STORAGE_TYPE === 'firebase') {
        }
    }

    public putFile(file, path) {
		path = path.replace(/ /g, '_')

		switch (process.env.STORAGE_TYPE) {
			case 'firebase':
			
			case 'local':
				return this.putFileLocal(file, path)
			default:
				throw new Error('No storage type in the ENV')
		}
	}


    public async getFile(filePath: string) {
        switch (process.env.STORAGE_TYPE) {
            case 'firebase':

            case 'local':
                return this.getFileLocal(filePath)
            default:
                throw new Error('No storage type in the ENV')
        }
    }

    public deleteFile(path) {
		switch (process.env.STORAGE_TYPE) {
			case 'firebase':
				
			case 'local':
				return this.deleteFileLocal(path)
			default:
				throw new Error('No storage type in the ENV')
		}
	}

    private async putFileLocal(file, path) {
		const fs = require('file-system');
		const parts = path.split('/')
		const directory = 'assets/' + parts.slice(0, parts.length -1).join('/')
		const exists = await fs.existsSync(directory)
		if (!exists) {
			await fs.mkdirSync(directory)
		}

		fs.writeFileSync('assets/' + path, file.buffer);
		return path;
	}

    private getFileLocal(filePath: string) {
        const fs = require('file-system');
        const assetFolder = process.env.LOCAL_ASSET_DIR

        try {
            if (fs.existsSync(assetFolder + '/' + filePath)) {
                return fs.createReadStream(assetFolder + '/' + filePath)
            }
        } catch (err) {
            throw Error('no file')
        }
    }

    private deleteFileLocal(filePath: string) {
        const fs = require('fs');
        const assetFolder = process.env.LOCAL_ASSET_DIR
        fs.unlinkSync(assetFolder + '/' + filePath)
        return Promise.resolve(true)
    }

    public async getFileExtension(file) {
		const { filename } = await file;
		const parts = filename.split('.');
		const extension = parts[parts.length - 1];
		return extension;
	}


}
