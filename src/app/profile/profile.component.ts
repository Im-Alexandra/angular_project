import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataService : DataService) { }

  userId:any;
  user:any;
  userAvatarUrl:any;
  keyOfLoggedInUser:any;
  userFromLocalStorage:any;
 

  ngOnInit() {
    let userFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(userFromLocalStorage.userId)
    this.userId = userFromLocalStorage.userId;

    let allUsers = JSON.parse(localStorage.getItem("users"));

    this.user = allUsers.filter(obje => {
      return obje.userId === this.userId
    })
    this.userAvatarUrl = this.user[0].avatar;

  }

  onSubmit(editProfileFrm){
    console.log(editProfileFrm.value)

    let newName = editProfileFrm.value.firstname;
    let newLastname = editProfileFrm.value.lastname;

    console.log(JSON.stringify(this.user))
    console.log(this.user)

    // this.dataService.editUser(this.keyOfLoggedInUser, this.user).subscribe(
    //   response => console.log(response)
    // )
  }

  deleteProfile(){
    // this.keyOfLoggedInUser = '-LWCAiiBENtV_TrRfqAT';

    let allUsers;
    this.dataService.getAllUsers().subscribe((response: Response) => {
      // what is our users email
      this.userFromLocalStorage = localStorage.getItem("loggedInUser");
      let userParsed = JSON.parse(this.userFromLocalStorage);
      let userEmail = userParsed.email;
      console.log(response)

      //add all the users to an array
      for (let key in response) {
        let value = response[key];
      console.log(value)

        allUsers.push(value);
        if (value.email == userEmail) {
          this.keyOfLoggedInUser = key;
        }
      }
    })
    console.log(this.keyOfLoggedInUser)

    // this.dataService.deleteUser(this.keyOfLoggedInUser).subscribe(
    //   response => console.log(response)
    // )
  }

  editProfileFrm = new FormGroup ({
    firstnameEditProfileFrm : new FormControl(),
    lastnameEditProfileFrm : new FormControl(),
    // emailEditProfileFrm : new FormControl(),
    // passwordEditProfileFrm : new FormControl(),
    // descriptionEditProfileFrm : new FormControl(),
    // educationEditProfileFrm : new FormControl(),
    // locationEditProfileFrm : new FormControl(),
    // phoneEditProfileFrm : new FormControl(),
    // avatarEditProfileFrm : new FormControl(),
    // pictureEditProfileFrm : new FormControl(),
    // petsEditProfileFrm : new FormControl(),
    // groupIdEditProfileFrm : new FormControl(),
    // userIdEditProfileFrm : new FormControl(),
  })

}
