import { Body, Controller, Get, Header, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { get } from "http";
import LoginDto from "src/DB/Models/LoginDto";
import UserService from "./users.service";

@Controller('user')
export default class userController{
    constructor(private readonly userService: UserService){
    }
    @Post('login')
    @UsePipes(ValidationPipe)
    async login(@Body() loginCredentials: LoginDto){
        const response = await this.userService.login(loginCredentials)
        
        if(response.length <= 0){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                message: 'No such user',
              }, HttpStatus.FORBIDDEN);
        }else{
            return response;
        }
    }
    @Get('all')
    getUser(@Body() contact: string){
        // return this.userService.
    }
}