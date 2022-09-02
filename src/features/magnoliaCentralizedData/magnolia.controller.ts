import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
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
    }
}