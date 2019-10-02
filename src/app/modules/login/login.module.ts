import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

// const loginRoutes: Routes = [
//   {
//     path: '',
//     component: LoginComponent
//   }
// ]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
    // RouterModule.forChild(loginRoutes),
  ], exports: [LoginComponent]
})
export class LoginModule { }
