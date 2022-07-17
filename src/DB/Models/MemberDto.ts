import {  IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator"
import { gender } from "src/constants/enums"

export class MemberCreateDTO {
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    @IsPhoneNumber('GH')
    contact: string
    @IsNotEmpty() 
    dob: Date
    gender: gender
    homeTown: string
    @IsEmail()
    email: string
    residence: string
    status: string
    matrital: string
}
 