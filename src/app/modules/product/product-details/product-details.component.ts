import { ProductDetails } from './../../../models/product.model';
import { ProductService } from './../../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart_service/cart.service';
import { CustomsnackbarComponent } from '../../customsnackbar/customsnackbar.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productid;
  singleProduct: ProductDetails;
  productArr: ProductDetails[] = [];
  priceRange;
  durationInSeconds = 0.8;
  constructor(private route: ActivatedRoute, private _productservice: ProductService,
    private _cartservice: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.productid = this.route.snapshot.params.id;
    this.route.params.subscribe(data => {
      this.productid = data.id;
      this._productservice.getProductDetail(this.productid).subscribe(data => {
        console.log(data, "datas");

        this.singleProduct = data[0];
        this.priceRange = this.singleProduct.price;
        console.log(this.priceRange, "myvalues");
      })
      this._productservice.getAllProducts().subscribe(data => {
        this.productArr = data;
        // console.log(this.productArr, "my local");

      })
    });
    // console.log(this.productid['id'], "productid");

    // console.log(this.product);
  }
  addToCart(product) {
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
