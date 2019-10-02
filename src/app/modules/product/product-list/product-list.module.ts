import { MatIconModule } from '@angular/material/icon';
import { CustomsnackbarComponent } from './../../customsnackbar/customsnackbar.component';
import { CustomsnackbarModule } from './../../customsnackbar/customsnackbar.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderModule } from './../../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { AddProductsComponent } from './products-card/add-products.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [ProductListComponent, AddProductsComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    PipesModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    CustomsnackbarModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    HeaderModule
  ], exports: [ProductListComponent, AddProductsComponent],
  entryComponents: [CustomsnackbarComponent]
})
export class ProductListModule { }
