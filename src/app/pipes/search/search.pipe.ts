import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var localvar;
    if (value && value.length > 0) {
      localvar = value.filter(prod => {
        if (args[0] && prod.name.toLowerCase().trim().indexOf(args[0].toLowerCase().trim()) === -1) {
          return false;
        } return true;
      })
      if (localvar.length === 0) {
        return [-1];
      } else {
        return localvar;
      }
    }
    else {
      return value;
    }
  }
}
