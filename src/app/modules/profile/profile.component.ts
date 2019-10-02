import { UserDetail } from '../../models//user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileid;
  myArr;

  profileArr: UserDetail[];
  constructor(private route: ActivatedRoute, private _service: UserService) { }

  ngOnInit() {
    // this.profileArr = JSON.parse(localStorage.getItem('userArray'));
    this.profileid = this.route.snapshot.params.id;
    console.log(this.profileid, "profileid");
    this.myArr = this._service.getUserId(this.profileid);
    console.log(this.myArr);


  }
  // getUserById() {

  // }

}
