import { Router } from '@angular/router';
import { UserDetail } from '../../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  localArr: UserDetail[] = [];
  localval;
  currentUser: UserDetail;
  constructor(private route: Router) {
    if (localStorage.getItem('userArray')) {
      this.localArr = JSON.parse(localStorage.getItem('userArray'));
    }
  }
  setUser(profileForm) {
    this.localval = profileForm.email;
    profileForm.id = new Date().getTime();
    profileForm.isLoggedIn = true;
    this.localArr.push(profileForm);
    console.log(profileForm);
    if (profileForm.isLoggedIn) {
      this.route.navigate(['/profile', profileForm.id]);
    }
    localStorage.setItem('userArray', JSON.stringify(this.localArr));
  }
  fetchUser(email) {
    // for (let user of this.localArr) {
    //   if (user.email === email) {
    //     user.isLoggedIn = true;
    //     console.log(user.id);
    //     localStorage.setItem('userArray', JSON.stringify(this.localArr));
    //     this.route.navigate(['/profile', user.id])
    //   }
    // }

  }
  getProfileGuard(id) {
    this.localArr = JSON.parse(localStorage.getItem('userArray'));
    for (let user of this.localArr) {
      if (user.id == id) {
        console.log("myuser", user);

        return user;
      }
    }
  }

  logUserOut() {
    if (localStorage.getItem('isLoggedIn')) {
      localStorage.removeItem('loginId');
      localStorage.setItem('isLoggedIn', JSON.stringify(false));
      this.route.navigate(['/login']);
    }
  }
  getUserId(profileid) {
    for (let user of this.localArr) {
      if (user.id == profileid) {
        return user;
      }
    }
  }
  // checkUser() {
  //   this.currentUser=

  //   return this.localArr.find(obj => {
  //     return obj.email === this.localval.email
  //   })
  // }
}
