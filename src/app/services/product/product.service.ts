import { URL } from './../../constants/apis.url';
import { ProductDetails } from './../../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductDetail(productid) {
    return this.http.get<ProductDetails>(`${URL.getSingleProduct}id=${productid}`);
  }
  getAllProducts() {
    return this.http.get<ProductDetails[]>(URL.getProduct)
  }


  // logUserOut(){

  // }
}
