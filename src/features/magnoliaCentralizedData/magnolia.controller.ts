import { BadRequestException, Body, Controller, Get, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import magnoliaCompanyDTO from "src/DB/Models/Magnolia/magnoliaCompanyDTO";
import magnoliaService from "./magnolia.service";

@Controller("magnolia")
export default class magnoliaController{
    constructor(
        private readonly mgnlService: magnoliaService
    ){}
    @Get("workspace")
    getData(){
        return this.mgnlService.getData();
    }
    @Post("workspace")
    @UsePipes(ValidationPipe)
    saveData(@Body() dataBody: magnoliaCompanyDTO){
      console.log(dataBody);  
      try {
        this.mgnlService.saveData(dataBody).then(res=>{
            console.log("res",res)
            return HttpStatus.ACCEPTED;
        })
        ;
      } catch (error) {
        return new BadRequestException("Could not save")
      }
    }
}