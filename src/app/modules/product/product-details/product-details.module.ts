import { RouterModule } from '@angular/router';
import { ProductListModule } from './../product-list/product-list.module';
import { PipesModule } from './../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from 'src/app/services/product/product.service';
import { MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { HeaderModule } from '../../header/header.module';
import { CustomsnackbarModule } from '../../customsnackbar/customsnackbar.module';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    PipesModule,
    MatSnackBarModule,
    CustomsnackbarModule,
    MatCardModule,
    MatButtonModule,
    ProductListModule,
    RouterModule
  ], providers: [ProductService]
})
export class ProductDetailsModule { }
