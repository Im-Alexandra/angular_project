import { DataService } from 'src/app/data.service';
import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
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
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor (private dataService : DataService){
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
    
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}