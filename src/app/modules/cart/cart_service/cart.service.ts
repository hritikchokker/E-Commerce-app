import { CartDetails } from './../../../models/cart.model';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userId;
  products: CartDetails[] = [];
  singleProduct: CartDetails;
  total = 0;
  items;
  flag;
  // count = 0;
  cartSubject = new BehaviorSubject(0);

  constructor() {
    if (localStorage.getItem('currentUser')) {
      this.userId = JSON.parse(localStorage.getItem('loginId'));
      this.products = JSON.parse(localStorage.getItem('currentUser'));
      this.loadCartFromStorage();
      this.updateCart();
    }

  }

  addToCarts(userproduct) {
    this.flag = false;
    console.log(userproduct);

    this.loadCartFromStorage();
    if (this.singleProduct && this.singleProduct.products && this.singleProduct.products.length > 0) {
      this.singleProduct.products.forEach(prodarr => {
        if (prodarr.id === userproduct.id) {
          prodarr.quantity++;
          this.flag = true;
        }
      })
    }
    //localStorage.setItem('currentUser', JSON.stringify(this.products));
    if (this.flag !== true) {
      this.singleProduct.products.push({
        id: userproduct.id,
        name: userproduct.name,
        price: userproduct.price,
        brand: userproduct.brand,
        color: userproduct.color,
        image: userproduct.image,
        quantity: 1
      })
    }
    // this.updateCart();
    localStorage.setItem('currentUser', JSON.stringify(this.products));
    this.cartTotal();
  }
  addToCartFromComponent(productid) {
    var flag = false;
    this.loadCartFromStorage();
    console.log(productid, "prodid usdsd");
    this.singleProduct.products.forEach(prod => {
      if (prod.id === productid) {
        prod.quantity++;
        flag = true;
      }
    })
    // this.flag = true;
    if (flag) {

      localStorage.setItem('currentUser', JSON.stringify(this.products));
    }
    this.cartTotal();
    // this.updateCart();
  }
  removeToCartFromComponent(i, productid) {
    var flag = false;
    var deleteUser = false;
    this.loadCartFromStorage();
    this.singleProduct.products.forEach((prod, index) => {
      if (prod.id === productid) {
        if (prod.quantity <= 1 && confirm('are You Sure')) {
          prod.quantity--;
        } if (prod.quantity > 1) {
          prod.quantity--;
        }
        if (prod.quantity < 1) {
          deleteUser = true;
          this.singleProduct.products.splice(index, 1);
        }
        flag = true;
      }
    })
    if (flag) {
      localStorage.setItem('currentUser', JSON.stringify(this.products));
    }
    if (deleteUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.products));
    }
    this.cartTotal();

  }
  cartTotal() {
    this.total = 0;
    // this.loadCartFromStorage();
    this.singleProduct.products.forEach(prod => {
      this.total += prod.quantity * prod.price;
    })
    this.updateCart();
    console.log(this.total, "total");
    // this.cartSubject.next(this.singleProduct.products.length);
  }
  loadCartFromStorage() {
    this.singleProduct = this.products.find(obj => {
      return obj.userId === this.userId;
    })
  }
  updateCart() {
    this.cartSubject.next(this.singleProduct.products.length);
    // console.log(this.singleProduct.products.length, "cart length");

  }
}
