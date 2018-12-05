import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var firebase : any;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  fetchSitterData(){
     return firebase.database().ref('/sitters/');
  }

  fetchPetData(){
    return this.http.get('https://pet-sitting-site.firebaseio.com/pets/.json');
  }
}
