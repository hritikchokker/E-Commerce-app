import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomsnackbarComponent } from './customsnackbar.component';



@NgModule({
  declarations: [CustomsnackbarComponent],
  imports: [
    CommonModule
  ], exports: [CustomsnackbarComponent]
})
export class CustomsnackbarModule { }
