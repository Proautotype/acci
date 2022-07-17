import { IsEmail, IsNotEmpty } from "class-validator";

export default class LoginDto {    
    @IsNotEmpty()
    contact: string
    @IsNotEmpty()
    password: string
}