import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductDetails } from './../../../models/product.model';
import { HttpService } from './../../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsArr: ProductDetails[] = [];
  showbtn = false;
  // colorfilter = '';
  searchfilter = '';
  searchfilterApply = '';
  filterbrand = '';
  colorArr = '';
  brands = '';
  brandsApply = '';
  formValue;
  resetToggle = true;
  // colorApply = '';
  value;
  valueApply;
  options;
  colorOptions;
  check;
  maxPrice;
  selected;
  selectedcopy;
  minPrice;

  constructor(private _http: HttpService, private fb: FormBuilder) { }

  filterForm = this.fb.group({
    colorFilter: [''],
    brandFilter: [''],
    rangeFilter: [this.maxPrice]
  })
  ngOnInit() {
    this.filterForm.valueChanges.subscribe(data => {
      this.resetToggle = false;
    })
    this._http.getProducts()
      .subscribe(
        res => {
          this.productsArr = res;
          this.check = this.productsArr.map(prod => prod.price)
          this.maxPrice = Math.max.apply(null, this.check);
          this.minPrice = Math.min.apply(null, this.check);
          this.value = this.maxPrice;
          console.log(this.maxPrice, "mycheck");
          this.options = this.productsArr.map(product => product.brand.toLocaleLowerCase().trim())
            .filter((value, index, arr) => arr.indexOf(value) === index);
          this.colorOptions = this.productsArr.map(col => col.color)
            .filter((value, index, arr) => arr.indexOf(value) === index);
        },
        err => {
          console.log(err);
        })
  }
  setAll() {
    // console.log(this.filterForm.value)
    this.formValue = { ...this.filterForm.value };
    // this.searchfilterApply = this.searchfilter;
    // this.valueApply = this.value;
    // this.brandsApply = this.brands;
    // this.colorApply = this.colorArr;
    // this.selectedcopy = this.selected;
    // console.log(this.valueApply);
    // this.showbtn = true;

  }
  resetAll() {
    this.filterForm.reset({ rangeFilter: this.maxPrice });
    this.searchfilterApply = '';
    this.formValue = null;
    this.resetToggle = true;
    this.value = this.maxPrice;

  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';

    }

    return value;
  }
  clearSearchName() {
    this.searchfilter = '';
  }

}
