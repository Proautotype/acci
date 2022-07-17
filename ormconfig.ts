import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const config: PostgresConnectionOptions ={
    type:'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'cjcj1122',
    database:'c__ch',
    schema:'ch2',
    entities: ['dist/src/entities/**/*.entity.js'],
    synchronize: true
}
