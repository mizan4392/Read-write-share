import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';
// var serviceAccount = require("../config/serviceAccount.json");
@Injectable()
export class StorageService {
    private storage;


    constructor() {
        if (process.env.STORAGE_TYPE === 'firebase') {
            // admin.initializeApp({
            //     credential: admin.credential.cert(serviceAccount),
            //     databaseURL: "https://read-write-share-36d59.firebaseio.com"
            // });

            // this.storage = admin.storage().bucket()
            // // admin.storage().bucket().upload()
        }
    }

    
}
