import { Injectable, Component } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
import { User } from '../entities/user';
import { Http } from '@angular/http';

@Component({
    providers: [Http]
  })

@Injectable()
export class UsersActions {
  static USERS_GET = 'USERS_GET';
  static USERS_ADD = 'USERS_ADD';
  static USERS_UPDATE = 'USERS_UPDATE';
  static USERS_DELETE = 'USERS_DELETE';

  API_URL = 'https://pet-sitting-site-2.firebaseio.com';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private http: Http,
  ) {
    
  }
  sitters: any = [];
  getUsers() {
    this.http.get(`${this.API_URL}/users`)
      .subscribe((res) => {
        // get users
        // for (let key in res){
        //     let value = res[key];
        //     this.sitters.push(value)
        //   }
        const list = res.json();
        console.log(list)
        // populate users state (dispatch action)
        // this.ngRedux.dispatch({
        //   type: UsersActions.USERS_GET,
        //   payload: {
        //     list
        //   }
        // });
        // Set the first user as active (dispatch action)
        // this.setActiveUser(list[0].id);
      });
  }

  save(user: User) {
    if (user.userId) {
      this.update(user);
    } else {
      this.add(user);
    }
  }

  add(user: User): void {
    this.http.post(`${this.API_URL}/users/`, user)
      .subscribe((res) => {
        // add new user
        this.ngRedux.dispatch({
          type: UsersActions.USERS_ADD,
          payload: { user: res.json() }
        });

        // select last added user
        // this.setActiveUser(res.json().id);
      });
  }

  update(user: User) {
    this.http.patch(`${this.API_URL}/users/${user.userId}`, user)
      .subscribe((res) => {
        // update user
        this.ngRedux.dispatch({
          type: UsersActions.USERS_UPDATE,
          payload: { user: res.json() }
        });

        // update active user
        // this.setActiveUser(user.userId);
      });
  }

  deleteUser(id): void {
    this.http.delete(`${this.API_URL}/users/${id}`)
      .subscribe((res) => {
        this.ngRedux.dispatch({
          type: UsersActions.USERS_DELETE,
          payload: { id }
        });
        // this.resetActive();
      });
  }

}
