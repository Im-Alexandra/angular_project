import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from './entities/sitter';
declare var firebase : any;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // READ
  fetchSitterData(){
     return this.http.get('/assets/data/users.json');
  }

  fetchUserData(){
      return this.http.get('/assets/data/users.json');
  }

  fetchPetData(){
    return this.http.get('/assets/data/pets.json');
  }

  // CREATE
  createSitter(sitter : Sitter){
  return this.http.post('/assets/data/users.json', sitter);
}
}


