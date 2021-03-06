import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './../../common/custom.validators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.css']
})
export class RegisterSitterComponent implements OnInit {
// hide password by default
  hide = true;
  feedback = false;

// generate random user id
  userId: string = Math.random().toString(36).substr(2, 9);
  constructor (private dataService : DataService) { }

  ngOnInit() {
    console.log(this.userId);
    
  }

  onSubmitRegister(registerSitterForm){
    
    if (registerSitterForm.valid){
      let user = registerSitterForm.value as User;
      // console.log(user);
      this.dataService.createUser(user).subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
      // redirect to register feedback
      // this.router.navigate(['register-feedback']);
      this.feedback = true;
    }else{
      this.registerSitterForm.setErrors({
        invalidSitterRegister : true
      })
    }
  }


  registerSitterForm = new FormGroup ({
    firstname : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastname : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email : new FormControl('', [
      Validators.required,
      Validators.email,
      CustomValidators.cannotContainSpace
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    phone : new FormControl('', [
      Validators.required,
      CustomValidators.isNumber
    ]),
    location : new FormControl('', [
      Validators.required
    ]),
    education : new FormControl('', [
      Validators.required
    ]),
    description : new FormControl(),
    avatar : new FormControl('', [
      Validators.required
    ]),
    picture : new FormControl('',),
    userId : new FormControl(this.userId,),
    groupId : new FormControl(1,),
    pets : new FormControl('[]',)
  })

  get firstname(){
    return this.registerSitterForm.get('firstname')
  }

  get lastname(){
    return this.registerSitterForm.get('lastname')
  }

  get email(){
    return this.registerSitterForm.get('email')
  }

  get password(){
    return this.registerSitterForm.get('password')
  }

  get phone(){
    return this.registerSitterForm.get('phone')
  }

  get location(){
    return this.registerSitterForm.get('location')
  }

  get education(){
    return this.registerSitterForm.get('education')
  }

  get description(){
    return this.registerSitterForm.get('description')
  }

  get avatar(){
    return this.registerSitterForm.get('avatar')
  }

  get picture(){
    return this.registerSitterForm.get('picture')
  }

}


