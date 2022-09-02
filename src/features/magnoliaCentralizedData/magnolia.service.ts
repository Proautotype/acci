import { Injectable } from "@nestjs/common";
import magnoliaCompanyDTO from "src/DB/Models/Magnolia/magnoliaCompanyDTO";
import { mgnlRepository } from "src/DB/Repositories/all.repositories";

@Injectable()
export default class magnoliaService{
   async saveData (magnoliaCompanyDTO: magnoliaCompanyDTO){
    try {
        return await mgnlRepository.save(magnoliaCompanyDTO);
    } catch (error) {
        return error
    }
   }

   async getData(){
    try {
        return await mgnlRepository.find();
    } catch (error) {
        console.log(error)
    }
   }
}
