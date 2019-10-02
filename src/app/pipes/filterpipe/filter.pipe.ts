import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    var products = [...value];
    var check = args;
    // console.log(check[0], "argumentwsz");

    if (check[0]) {
      if (check[0].colorFilter && check[0].colorFilter.length > 0) {
        products = products.filter(prod => {
          return check[0].colorFilter.includes(prod.color.toLowerCase().trim());
        })
      }
      if (check[0].brandFilter && check[0].brandFilter.length > 0) {
        products = products.filter(prod => {
          return check[0].brandFilter.includes(prod.brand.toLowerCase().trim());
        })
      }
      if (check[0].rangeFilter) {
        products = products.filter(prod => {
          return check[0].rangeFilter > prod.price;
        })
      }
      return products;
    }
    else {
      return products;
    }
    // var newobj = Object.keys(products)


  }

}

