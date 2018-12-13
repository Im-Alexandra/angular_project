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
     return this.http.get('/assets/data/sitters.json');
  }

  fetchPetData(){
    return this.http.get('/assets/data/pets.json');
  }

  // CREATE
  createSitter(sitter : Sitter){
  return this.http.post('../assets/data/sitters.json', JSON.stringify(sitter));
}
}


