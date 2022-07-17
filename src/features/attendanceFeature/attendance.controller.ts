import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import attendanceDTO from "src/DB/Models/attendanceDto";
import { AttPipePipe } from "src/pipes/att-pipe.pipe";
import attendanceService from "./attendance.service";

@Controller("attendance")
export default class attendanceController{
    constructor(private readonly attendanceServer: attendanceService){}
    @Get('all')
    allAttendance(){
       return this.attendanceServer.getAllAttendance();
    }
    @Post('add')
    @UsePipes(ValidationPipe)
    @UsePipes(AttPipePipe)
    addAttendance(@Body() attendBody: attendanceDTO){
        console.log('body',attendBody)
       return this.attendanceServer.addAttendance(attendBody);
    }
}