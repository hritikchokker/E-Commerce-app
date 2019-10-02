import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectpipe'
})
export class SelectpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value, "testing");
    // console.log(args[0], "argument none")

    if (args[0]) {
      if (args[0] === 'option1') {
        return value.sort((a, b) => {
          return a.price - b.price;
        })

      } else if (args[0] === 'option2') {
        return value.sort((a, b) => {
          return b.price - a.price;
        })
      }


    }

    return value;
  }

}
