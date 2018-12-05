import { CustomValidators } from './../common/custom.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstForm = new FormGroup({
    
  })

  secondForm = new FormGroup({
      sitter : new FormControl (),
      owner : new FormControl (),
      firstName : new FormControl('', [
          Validators.required,
          Validators.minLength(3)
      ]),
      lastName : new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      username : new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        CustomValidators.cannotContainSpace
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
      ])
   
      
  });

  get firstName(){
    return this.secondForm.get('firstName')
  }

  get lastName(){
    return this.secondForm.get('lastName')
  }

  get username(){
    return this.secondForm.get('username')
  }

  get email(){
    return this.secondForm.get('email')
  }

  get password(){
    return this.secondForm.get('password')
  }

  get phone(){
    return this.secondForm.get('phone')
  }

  

  
  
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;

  // constructor (private _formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required]
  //   });
  //   this.secondFormGroup = this._formBuilder.group({
  //     secondCtrl: ['', Validators.required]
  //   });
  //   this.thirdFormGroup = this._formBuilder.group({
  //     secondCtrl: ['', Validators.required]
  //   });
  // }

}

export class DatepickerOverviewExample {}
