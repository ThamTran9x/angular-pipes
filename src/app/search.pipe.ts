import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string, arg: string): any {
    const sortedArray = [];
    if (value.length > 0 && filterString !== '') {
      value.forEach(item => {
        if (item[arg].toLowerCase().split(' ').indexOf(filterString) !== -1) {
          sortedArray.push(item);
        }
      });
      return sortedArray;
    }
    return value;
  }
}
