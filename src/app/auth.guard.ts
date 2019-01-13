import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.authService.isLoggedIn         // {1}
      .pipe(
        take(1),                              // {2} 
        map((isLoggedIn: boolean) => {         // {3}
          if (!isLoggedIn){
            this.router.navigate(['/login']);  // {4}
            return false;
          }
          return true;
        }));
  }

  // checkLogin(url: string): Observable<boolean> {
  //   console.log("isLoggedIn? " + this.authService.isLoggedIn);
  //   // local storage
  //   // if (this.authService.isLoggedIn){
  //   //   localStorage.setItem('loggedIn', JSON.stringify(1));
  //   // }else{
  //   //   localStorage.setItem('loggedIn', JSON.stringify(0));
  //   // }
  //   if (this.authService.isLoggedIn) { return true; }

  //   // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // Navigate to the login page with extras
  //   this.router.navigate(['login']);
  //   return false;
  // }
}
