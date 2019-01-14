import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../common/custom.validators';
import { Router, ActivatedRoute } from '@angular/router';


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

  constructor (private router: Router, private authService: AuthService, private route: ActivatedRoute) {
    // this means it gets access to router and autservice so it can be used below
  }

  loginForm = new FormGroup({
    loginEmail : new FormControl('', [
      Validators.required,
      Validators.email
    ]), 
    loginPassword : new FormControl('', [
      Validators.required
    ])
  });

  
  onSubmitLogin(loginForm){
   
    // console.log(loginForm)
    if (loginForm.valid){
      //call api to verify the login credentials
      const email = this.loginForm.value.loginEmail;
      const password = this.loginForm.value.loginPassword;
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

      console.log(email, password, returnUrl )
      this.authService.tryLogin(email, password, returnUrl)
        
        // this.router.navigate(['profile']);
      
      }
    }
  }

