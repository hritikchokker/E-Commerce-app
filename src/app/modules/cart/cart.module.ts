import { MatIconModule } from '@angular/material/icon';
import { OrderModule } from './../order/order.module';
import { HeaderModule } from './../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { CustomsnackbarModule } from './../customsnackbar/customsnackbar.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatCard, MatButtonModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    OrderModule,
    MatTooltipModule,
    RouterModule
    // RouterModule.forChild(cartRoutes)
  ], exports: [CartComponent]
})
export class CartModule { }
