import { DataSource } from "typeorm";
const  DB = new DataSource({
    type: 'postgres',
    host: 'ec2-3-219-229-143.compute-1.amazonaws.com',
    port: 5432,
    username: 'eisbtcwgrbeoov',
    password: '307e60953a4d30b73859976f247c1d0437dd6bcefe5bc231f02eaa089b8c7eab',
    database: 'd8fpu6aq3ega1i',
    schema: 'public',
    entities: ['dist/src/DB/Entities/**/*.entity.js'],
    synchronize: true,
    ssl:{
        rejectUnauthorized: false
    }
})
DB.initialize() .then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});
export default DB;