import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { gender } from 'src/constants/enums';

@Injectable()
export class GenderValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log('genderppo',value)
    if(!(value?.gender in gender)){
      throw new BadRequestException("given gender value is bad")
    }
    return value;
  }
}
