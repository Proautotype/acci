import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AttPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('pipe',value)
    if(typeof value.date !== 'undefined'){
      try{
        const datee = new Date(value.date);
        console.log(datee)
      } catch (error) {
       return new BadRequestException('Invalid date option, please check your date format')
      }
     }
     return value;
  }
}
