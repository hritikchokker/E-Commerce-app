import { AfterloginGuard } from './guards/afterlogin.guard';
import { OrderComponent } from './modules/order/order.component';
import { CartModule } from './modules/cart/cart.module';
import { CartComponent } from './modules/cart/cart.component';
import { BeforeloginGuard } from './guards/beforelogin.guard';

import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { PagenotfoundModule } from './modules/pagenotfound/pagenotfound.module';
import { SignupModule } from './modules/signup/signup.module';
import { LoginModule } from './modules/login/login.module';
// import { GuardLoginGuard } from './guards/guard-login.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

const appRoutes: Routes = [{
  path: '',
  redirectTo: 'signup',
  pathMatch: 'full'
},
{
  path: 'signup',
  component: SignupComponent,
  canActivate: [BeforeloginGuard]
},
{
  path: 'login',
  component: LoginComponent,
  canActivate: [BeforeloginGuard]
},
{
  path: 'profile/:id',
  loadChildren: () => import('./modules/profile/profile.module').then(mod => mod.ProfileModule)
},
{
  path: 'product',
  loadChildren: () => import('./modules/product/product.module').then(mod => mod.ProductModule)
  // canLoad: [ProductsGuard]
},
{
  path: 'order',
  component: OrderComponent,
  canActivate: [AfterloginGuard]
},
{
  path: 'cart',
  component: CartComponent,
  canActivate: [AfterloginGuard]
},
{
  path: "**",
  component: PagenotfoundComponent
}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupModule,
    LoginModule,
    CartModule,
    PagenotfoundModule,
    RouterModule.forRoot(appRoutes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
