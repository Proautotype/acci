import { attendanceRepository } from "src/DB/Repositories/all.repositories";

import { Injectable }  from "@nestjs/common";
import attendanceDTO from "src/DB/Models/attendanceDto";

@Injectable()
class attendanceService{
   async getAllAttendance(){
    try {
        const result = attendanceRepository.find();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error)
        throw error
    }
   }
   async addAttendance(attendBody: attendanceDTO){
    try {
        const result = attendanceRepository.save(attendBody);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error)
        throw error
    }
   }
}
export default attendanceService;