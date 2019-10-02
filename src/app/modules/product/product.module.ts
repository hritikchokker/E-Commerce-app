import { AfterloginGuard } from './../../guards/afterlogin.guard';
import { ProductService } from './../../services/product/product.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListModule } from './product-list/product-list.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';


const productRoutes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AfterloginGuard]
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailsComponent,
    canActivate: [AfterloginGuard]

  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListModule,
    ProductDetailsModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
