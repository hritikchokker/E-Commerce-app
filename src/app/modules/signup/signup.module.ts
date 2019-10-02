import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from './../header/header.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import { ReactiveFormsModule, } from '@angular/forms';

// const signupRoute: Routes = [
//   {
//     path: '',
//     component: SignupComponent
//   }
// ]

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatFormFieldModule,
    MatInputModule,
    HeaderModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    RouterModule,
    MatNativeDateModule
    // RouterModule.forChild(signupRoute)
  ], providers: [MatDatepickerModule], exports: [SignupComponent]
})
export class SignupModule { }
