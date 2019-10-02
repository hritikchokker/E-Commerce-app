import { httpOptions } from './../constants/http.headers';
import { OrdersDetails } from './../models/order.model';
import { ProductDetails } from './../models/product.model';
import { URL } from './../constants/apis.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // count = 0;
  // cartSubject = new BehaviorSubject(this.count);

  constructor(private http: HttpClient) { }
  postUser(signupform) {
    console.log(signupform.id, "idsignup");

    return this.http.post<UserDetail>(URL.postUser, signupform, httpOptions);
  }
  getUser(email, password) {
    return this.http.get<UserDetail[]>(`${URL.getUser}email=${email}&password=${password}`);

  }
  getSingupUser(useremail) {
    return this.http.get<UserDetail[]>(`${URL.getUser}email=${useremail}`)
  }
  deleteUser() {
  }
  checkUserEmail(email) {
    return this.http.get<UserDetail[]>(`${URL.checkUserEmail}=${email}`);
  }

  getProducts() {
    return this.http.get<ProductDetails[]>(URL.getProduct);

  }
  orderCompleted(product) {
    console.log(product, "product");

    return this.http.post<OrdersDetails[]>(URL.postOrder, product, httpOptions);
  }
  getUserOrder(userid) {
    return this.http.get<OrdersDetails[]>(`${URL.getOrder}userId=${userid}`);
  }
  // addProductToCart(productid){
  //   return this.http.
  // }
}
