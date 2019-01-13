import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private authService : AuthService, private router: Router,){
  }
  isLoggedIn$: Observable<boolean>;
  avatar = "https://i.imgur.com/RPVaqNE.jpg";

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }
  
  logout(){
    this.authService.logout()
    this.router.navigate(['index/pet-list']);
  }

}
