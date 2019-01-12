import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private authService : AuthService, private router: Router,){
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['index/pet-list']);
  }

}
