import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { response } from "express";
import LoginDto from "src/DB/Models/LoginDto";
import { UserRepository } from "src/DB/Repositories/all.repositories";


@Injectable()
export default class userService{
    constructor(){
    }
    addUser(user){
        
    }
    async getUserByContact(memberId: any ,password: any,isLogin=false){
      console.log(memberId,password)
      try {
          const meta = !isLogin ? {
            select: {
                memberId: true,
            }, where:{
                memberId,
            } 
          }:{
            select: {
                memberId: true,
                password: true
            }, where:{
                memberId,
                password
            } 
          }
          const response = await UserRepository.find(meta);
          return response;
      } catch (error) {
        console.log(error)
        return error
      }
    }   
    login(loginCredentials: LoginDto){
        return this.getUserByContact(loginCredentials.contact,loginCredentials.password,true)
    }
}
