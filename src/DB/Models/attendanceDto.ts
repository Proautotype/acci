import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
export default class attendanceDTO{
    @IsNotEmpty()
    counter: string
    @IsNotEmpty()
    @IsNumber()
    total: number
    @IsNotEmpty() 
    date: Date
}