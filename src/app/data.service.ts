import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from './entities/sitter';
import { map } from 'rxjs/operators';
declare var firebase : any;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // READ
  fetchUserData(){
     return this.http.get('https://pet-sitting-site-2.firebaseio.com/users.json');
  }

  fetchPetData(){
    return this.http.get('/assets/data/pets.json');
  }

  // CREATE
  createSitter(sitter : Sitter){
  return this.http.post('https://pet-sitting-site-2.firebaseio.com/users.json', JSON.stringify(sitter));
}
}


