import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const TypeormConfig:TypeOrmModuleOptions = {
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'rootpassword',
    database:'rwd',
    entities:[__dirname + 'dist/../**/*.entity.js'],
    synchronize:true,
};
