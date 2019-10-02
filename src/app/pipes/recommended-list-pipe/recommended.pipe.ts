import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommended'
})
export class RecommendedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var range = 1000;
    // var priceRange = args[0];
    // var lowerRange = 5000;
    // var upperRange = priceRange + 5000;
    // console.log(args[0], "arguments");
    // console.log(value, "hasdhashdbahda");
    if (args[0]) {
      // console.log(args[0],"arguments is this");
      return value.filter(myobj => {
        if (myobj.price !== args[0]) {
          // console.log(myobj,"myobj");
          if (args[0] - range <= myobj.price && myobj.price <= args[0] + range) {
            // console.log('inside this if');
            return true;
          }
        }
        return false;
      })
    }
    return value;
  }
}
// myobj.price - range <= args[0] && args[0] <= myobj.price + range

// if (args[0]) {
//   return value.filter(myobj => {
//     if(myobj.name !== args[0].name){
//     if (args[0].price - range < myobj.price && myobj.price < args[0].price + range) {
//       return true;
//     }
//     return false;
//   }
//   });
//   // console.log(newValue, "masdhasdas");
//   // return newValue

// }
