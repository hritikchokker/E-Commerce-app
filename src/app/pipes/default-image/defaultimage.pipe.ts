import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value,"value");
    
    if(!value){
      value = "https://bluemountro.com/newproject/assets/images/no-image.png";
      
    }
    return value;
  }

}
