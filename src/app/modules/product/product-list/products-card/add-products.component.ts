import { HttpService } from 'src/app/shared/http.service';
import { CustomsnackbarComponent } from './../../../customsnackbar/customsnackbar.component';
import { CartService } from './../../../cart/cart_service/cart.service';
import { ProductDetails } from '../../../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  @Input() childProductArr: ProductDetails;
  @Input() singleProduct;
  search = '';
  userid;
  toggle = false;
  currentProduct;
  durationInSeconds = 0.8;
  constructor(private route: Router, private router: ActivatedRoute, private _cartservice: CartService,
    private _snackBar: MatSnackBar, private _http: HttpService) { }
  ngOnInit() {
    this.userid = this.router.snapshot.params.id;
  }
  addToCart(event, product) {
    event.stopPropagation();
    // if (!this.childProductArr.name) {
    //   this.toggle = true;
    // }
    this._cartservice.addToCarts(product);
    // this._http.cartSubject.next(++this._http.count);
    this.openSnackBar();
  }
  openSnackBar() {
    this._snackBar.openFromComponent(CustomsnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
