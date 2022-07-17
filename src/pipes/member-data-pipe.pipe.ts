import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { MemberCreateDTO } from 'src/DB/Models/MemberDto';

@Injectable()
export class MemberDataPipe implements PipeTransform {
  transform(value: MemberCreateDTO, metadata: ArgumentMetadata) {
    if(typeof value.dob !== 'undefined'){
     try{
       const datee = new Date(value.dob);
       console.log(datee)
     } catch (error) {
      return new BadRequestException('Invalid date option, please check your date format')
     }
    }
    return value;
  }
}
