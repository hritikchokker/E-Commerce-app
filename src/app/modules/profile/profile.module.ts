import { HeaderModule } from './../header/header.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(profileRoutes)
  ], exports: [ProfileComponent]
})
export class ProfileModule { }
