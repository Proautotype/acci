import { Module } from "@nestjs/common";
import attendanceController from "./attendance.controller";
import attendanceService from "./attendance.service";

@Module({
    controllers:[attendanceController],
    providers:[attendanceService],
    exports:[attendanceService]
})
export default class attendanceModule{}