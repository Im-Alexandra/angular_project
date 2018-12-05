import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var firebase : any;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  fetchUserData(){
     return this.http.get('https://pet-sitting-site-2.firebaseio.com/users.json');
  }

  // addUserData(){
  //   return this.http.post('https://pet-sitting-site-2.firebaseio.com/users.json', );
  // }

  fetchPetData(){
    return this.http.get('https://pet-sitting-site-2.firebaseio.com/pets.json');
  }
}
