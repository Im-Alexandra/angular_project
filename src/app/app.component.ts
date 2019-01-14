import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @select() counter;

  constructor ( private authService : AuthService, 
                private router: Router, 
                private ngRedux: NgRedux<IAppState>){
  }

  isLoggedIn$: Observable<boolean>;
  avatar: any;
  loggedInUser : any;


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    if(this.isLoggedIn$){
      this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      console.log(this.loggedInUser)
      console.log(this.loggedInUser.avatar)
      this.avatar = this.loggedInUser.avatar;
    }
  
    // this.avatarUrl = this.user[0].avatar;
    // this.pictureUrl = this.user[0].picture;
    
  }
  
  logout(){
    this.authService.logout()
    this.router.navigate(['index/pet-list']);
    this.avatar = '';
  }

}
