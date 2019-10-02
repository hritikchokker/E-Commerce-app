import { OrdersDetails } from './../../models/order.model';
import { SYMBOL } from './../../constants/symbols';
import { HttpService } from 'src/app/shared/http.service';
import { CartService } from './../cart/cart_service/cart.service';
import { CartDetails } from './../../models/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  readonly currencySymbol = SYMBOL.indianCurrency;
  localuser;
  newOrder: OrdersDetails[];
  userid;
  toggle;
  userProducts;
  oneProduct;
  // total;
  productprice;
  productquantity;
  constructor(public _cartservice: CartService, private _http: HttpService) {
    if (localStorage.getItem('currentUser')) {
      this.localuser = this._cartservice.products;
      this.userid = JSON.parse(localStorage.getItem('loginId'));
      this.userProducts = this.localuser.find(user => {
        return user.userId === this.userid;
      })
      if (this.userProducts.products.length !== 0) {
        this.oneProduct = this.userProducts.products;
      }
      this._cartservice.loadCartFromStorage();
    }

  }

  ngOnInit() {
    this._cartservice.cartTotal();
    this._http.getUserOrder(this.userid).subscribe(data => {
      if (data.length === 0) {
        this.toggle = false;
      } else {
        this.newOrder = data;
        this.toggle = true;
        console.log(this.newOrder);

      }

      // console.log(data);
    }
    );
    this._cartservice.updateCart();
  }
  getTotal(products) {
    console.log(products);

    let total = 0;
    for (let product of products) {
      total += product.price * product.quantity;
    }
    return total;
  }
}

