import { SYMBOL } from './../../constants/symbols';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from './cart_service/cart.service';
import { ProductDetails } from './../../models/product.model';
import { CartDetails } from './../../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { OrdersDetails } from 'src/app/models/order.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  localuser: CartDetails[];
  readonly currencySymbol = SYMBOL.indianCurrency;
  userproducts;
  oneProduct: ProductDetails[] = [];
  addquantity;
  removequantity;
  userid;
  constructor(public _cartservice: CartService, public _http: HttpService, private route: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.localuser = this._cartservice.products;
      this.userid = this._cartservice.userId;
      this.userproducts = this.localuser.find(user => {
        return user.userId === this.userid;
      })
      this.oneProduct = this.userproducts.products;
      this._cartservice.loadCartFromStorage();


    }
    console.log(this.localuser, "localuser");
    // tslint:disable-next-line: quotemark
    console.log(this.oneProduct, "userproduct");
    this._cartservice.loadCartFromStorage();
    this._cartservice.cartTotal();
  }

  addProductQuantity(productid) {
    // tslint:disable-next-line: quotemark
    console.log(productid, "producbaasd");

    this._cartservice.addToCartFromComponent(productid);
    // this._cartservice.cartTotal();
  }
  removeProductQuantity(index, productid) {
    this._cartservice.removeToCartFromComponent(index, productid);
    // this._cartservice.cartTotal();
  }

  checkOut() {
    let order: OrdersDetails = {
      userId: this.userid,
      cartDetail: this.userproducts
    }
    this._http.orderCompleted(order).pipe(
      tap(res => {
        this.userproducts.products = [];
        localStorage.setItem('currentUser', JSON.stringify(this.localuser));
        this.route.navigate(['/order']);

      })

    ).
      subscribe(data => {
        // console.log(data, "data is here");
      })
  }
}


