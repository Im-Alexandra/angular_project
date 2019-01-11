import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom.validators';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {
// hide password by default
  hide = true;

// generate random user id
  userId: string = Math.random().toString(36).substr(2, 9);
  constructor (private dataService : DataService) { }

  ngOnInit() {
    console.log(this.userId);
  }

  onSubmitRegister(registerOwnerForm){
    if(registerOwnerForm.valid){
      // console.log(registerOwnerForm.value)
      let user = registerOwnerForm.value as User;
      console.log(user);
      this.dataService.createUser(user).subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    }else{
      this.registerOwnerForm.setErrors({
        invalidSitterRegister : true 
      })
    }

  }

  registerOwnerForm = new FormGroup ({
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
      Validators.email
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
    picture : new FormControl('undefined',),
    userId : new FormControl(this.userId,),
    groupId : new FormControl(0,),
    pets : new FormControl('[]',)
  })

  get firstname(){
    return this.registerOwnerForm.get('firstname')
  }

  get lastname(){
    return this.registerOwnerForm.get('lastname')
  }

  get email(){
    return this.registerOwnerForm.get('email')
  }

  get password(){
    return this.registerOwnerForm.get('password')
  }

  get phone(){
    return this.registerOwnerForm.get('phone')
  }

  get location(){
    return this.registerOwnerForm.get('location')
  }

  get education(){
    return this.registerOwnerForm.get('education')
  }

  get description(){
    return this.registerOwnerForm.get('description')
  }

  get avatar(){
    return this.registerOwnerForm.get('avatar')
  }

  get picture(){
    return this.registerOwnerForm.get('picture')
  }

}
