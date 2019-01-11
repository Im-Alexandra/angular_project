import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../common/custom.validators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  hide = true;
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor (private router: Router, private authService: AuthService) {
    // this means it gets access to router and autservice so it can be used below
  }

  loginForm = new FormGroup({
    loginEmail : new FormControl,
    loginPassword : new FormControl
  });

  
  onSubmitLogin(loginForm){
   
    // console.log(loginForm)
    if (loginForm.valid){
      //call api to verify the login credentials

      this.authService.login().subscribe(val=>{
        console.log(val);
        
        this.router.navigate(['profile']);
      })
      }
    }
  }

