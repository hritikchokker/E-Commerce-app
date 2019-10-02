import { CartDetails } from './../../models/cart.model';
import { Observable } from 'rxjs';
import { HttpService } from './../../shared/http.service';
import { UserDetail } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';
import { Router } from '@angular/router';
import { VALIDATE } from 'src/app/constants/login_signup.regex';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  localArr: UserDetail[] = [];
  maxDate = new Date(2001, 0, 31);
  UserInCart = false;
  postapi;
  localCart: CartDetails[] = [];
  userEmail;
  hide = true;
  // emailregex = ;
  // nameregex = ;
  constructor(private fb: FormBuilder, private route: Router, private _httpservice: HttpService) {
  }
  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(VALIDATE.name)]],
    email: ['', [Validators.required, Validators.pattern(VALIDATE.email)]],
    date: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(VALIDATE.password)]]
  })

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.localCart = JSON.parse(localStorage.getItem('currentUser'));
      // this.UserInCart = true;
    }
    // this.checkUserEmail();
  }

  addToStorage() {
    this._httpservice.getSingupUser(this.profileForm.value.email).subscribe(data => {
      if (data.length > 0) {
        alert('user already exists');
      } else {
        this._httpservice.postUser(this.profileForm.value).subscribe(data => {
          this.localCart.push({
            userId: data.id,
            products: []
          })
          localStorage.setItem('currentUser', JSON.stringify(this.localCart));
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          localStorage.setItem('loginId', JSON.stringify(data.id));
          this.route.navigate(['/product/product-list']);
          this.profileForm.reset();
        }
        )
      }

    })

  }


  get name(): FormControl {
    return this.profileForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }
  get date(): FormControl {
    return this.profileForm.get('date') as FormControl;
  }
  get password(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }

  checkUserEmail() {
    this.email.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(email => {
        if (email !== '' && !this.email.invalid) {
          this.email.markAsPending();
        } else {
          this.email.setErrors({ invalid: true });
        }
      })).subscribe(email => {
        this._httpservice.checkUserEmail(email)
          .subscribe((res) => {
            console.log(res);

            if (Array.isArray(res) && res.length) {
              this.email.markAsPending({ onlySelf: false });
              this.email.setErrors({ 'Exists': true });

            } else {
              this.email.markAsPending({ onlySelf: false });
              this.email.setErrors(null);

            }
          });
      });
  }
}

  // this.profileForm.get('email').valueChanges.subscribe(useremail=>{
      //   console.log(useremail,'useremail');
      //   this._httpservice.checkUserEmail(useremail).subscribe(data => {
      //     if(data[0].email === useremail){
      //       console.log(data[0].email,'name email is here');
      //       return true;
      //     }else{
      //       console.log('email not found');
      //       return false;
      //       // console.log(data,"useremail");
      //     }
      //   })
      // })
  // valueChanges(){
  //     this._httpservice.checkUserEmail(this.profileForm.value.email).subscribe(data=>{
  //       console.log(data,"user email");

  //     })
  // }
