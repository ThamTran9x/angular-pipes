import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reword'
})
export class RewordPipe implements PipeTransform {

  transform(value: any): any {

    if (value.length > 0) {
      let reword = '';
      const letters = value.split('');
       letters.reverse();
      letters.forEach(letter => {
        reword += letter;
      });
      return reword;
    }
    return value;
  }

}
