import { CartService } from './../cart/cart_service/cart.service';
import { UserDetail } from './../../models/user.model';
import { CartDetails } from './../../models/cart.model';
import { Observable } from 'rxjs';
import { HttpService } from './../../shared/http.service';
import { VALIDATE } from 'src/app/constants/login_signup.regex';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  userInCart = false;
  userCheck;
  localuser: CartDetails[] = [];
  userId;
  hide = true;

  ngOnChanges() {
    this._cartservice.loadCartFromStorage();
  }

  constructor(private fb: FormBuilder, private _httpservice: HttpService, private route: Router, private _cartservice: CartService) {
    if (localStorage.getItem('currentUser')) {
      this.localuser = JSON.parse(localStorage.getItem('currentUser'));
      this.userId = JSON.parse(localStorage.getItem('isLoggedIn'));
      this.userInCart = true;
      this._cartservice.loadCartFromStorage();
    }
    this._cartservice.loadCartFromStorage();
  }

  ngOnInit() {
    this._cartservice.loadCartFromStorage();
  }
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(VALIDATE.email)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(VALIDATE.password)]]
  })
  getUserFromService() {
    this._cartservice.loadCartFromStorage();
    this._httpservice.getUser(this.loginForm.value.email, this.loginForm.value.password).pipe(
      tap(res => {
        if (this.userInCart) {
          this.localuser.forEach(user => {
            if (user.userId === this.userId) {
              this.userCheck = true;
            }
          })
        }
      })
    )
      .subscribe(data => {
        if (data.length === 0) {
          alert('Credentials does not exists');
        } else {
          this._cartservice.loadCartFromStorage();
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          localStorage.setItem('loginId', JSON.stringify(data[0].id));

          // if (!this.userCheck) {
          //   this.localuser.push({
          //     userId: data[0].id,
          //     products: []
          //   })
          //   localStorage.setItem('currentUser', JSON.stringify(this.localuser));
          // }
          this.route.navigate(['/product/product-list']);
        }

      })

    this.loginForm.reset();
  }


  // get name(): FormControl {
  //   return this.loginForm.get('name') as FormControl;
  // }
  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
