import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';
import { HeaderModule } from './../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatButtonModule,
    MatCardModule,
    PipesModule,
    RouterModule
  ],
  exports: [OrderComponent]
})
export class OrderModule { }
