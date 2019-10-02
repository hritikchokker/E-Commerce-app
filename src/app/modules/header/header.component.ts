import { CartService } from './../cart/cart_service/cart.service';
import { HttpService } from 'src/app/shared/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // profileid;
  username;
  countCard;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private _userservice: UserService, private router: Router, private _cartservice: CartService) {
    this._cartservice.loadCartFromStorage();
  }

  ngOnInit() {
    this._cartservice.cartSubject.subscribe(val => {
      this.countCard = val;
    })
    // this._cartservice.loadCartFromStorage();

    // this.profileid = this.route.snapshot.params.id;
    // console.log(this.profileid, "profileid");

  }
  goToCart() {
    console.log('profileid');
    let userid = Number(JSON.parse(localStorage.getItem('loginId')));
    this.router.navigate(['/cart']);
  }
  logOut() {
    if (confirm('are you sure')) {
      // this.username =
      this._cartservice.loadCartFromStorage();
      this._userservice.logUserOut();
      // console.log(this.username, "username");
      // this.route.navigate(['/login']);
    }
  }
}
