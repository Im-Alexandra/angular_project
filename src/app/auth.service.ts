import { DataService } from 'src/app/data.service';
import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  isLoggedIn = new BehaviorSubject<boolean>(false)
  allUsers = [];

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor (private dataService : DataService, private router: Router){
  }

  tryLogin(email: string, password: string, returnUrl){
    this.dataService.getAllUsers().subscribe((response:Response)=> {
      //push data to allUsers array
      for (let key in response) {
        let value = response[key];
        this.allUsers.push(value);
      }

      let loggedInUser = {};
      //loop through all the users to find matching email and password
      var matchingEmailAndPassword = false;
      for (var i = 0; i < this.allUsers.length; i++){
          if(this.allUsers[i].email == email && this.allUsers[i].password == password){
              matchingEmailAndPassword = true;
              //now add all the info necessary about the user to the localstorage
              loggedInUser['userId'] = this.allUsers[i].userId
              loggedInUser['firstname'] = this.allUsers[i].firstname 
              loggedInUser['lastname'] = this.allUsers[i].lastname
              loggedInUser['phone'] = this.allUsers[i].phone            
              loggedInUser['email'] = this.allUsers[i].email 
              loggedInUser['password'] = this.allUsers[i].password 
              loggedInUser['groupId'] = this.allUsers[i].groupId 
              loggedInUser['education'] = this.allUsers[i].education
              loggedInUser['location'] = this.allUsers[i].location 
              loggedInUser['description'] = this.allUsers[i].description 
              loggedInUser['avatar'] = this.allUsers[i].avatar
              loggedInUser['picture'] = this.allUsers[i].picture
              loggedInUser['children'] = this.allUsers[i].children 
              //console.log(loggedInUser)
              let loggedInUserString = JSON.stringify(loggedInUser)
              localStorage.loggedInUser = loggedInUserString;
              break;
          }
      }

      //if there was a match, then return true and credentials
      if(matchingEmailAndPassword == true){
        console.log('credential matching')
        // this.router.navigate(['/index/pet-list']);
        this.login().subscribe(val=>{
          console.log(val);
          
          this.router.navigate(['profile']);
        })
        
      }else{
        console.log('credential NOT matching')
        this.isLoggedIn.next(false);
        return of(false);
      }

    })
  }

  login(): Observable<boolean> {
    console.log("login was called")
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn.next(true))
    );
}

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.isLoggedIn.next(false);
    console.log("Loggedin is " + this.isLoggedIn)
  }
}