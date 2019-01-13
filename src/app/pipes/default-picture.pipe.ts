import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPicture'
})
export class DefaultPicturePipe implements PipeTransform {

  transform(value: any, fallBackValue: any): any {
    let result: string = value ? value : fallBackValue;
    // condition ? result1 : result2;
    
    return result;
  }

}
