import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  fetchSitterData(){
    return this.http.get('./assets/data/sitters.json');
  }

  fetchPetData(){
    return this.http.get('./assets/data/pets.json');
  }
}
