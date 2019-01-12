import { Pet } from './entities/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './entities/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // READ
  getAllUsers(){
     return this.http.get('https://pet-sitting-site-2.firebaseio.com/users.json');
  }

  getOnlySitters(){
    return this.getAllUsers().pipe(
      // (+) before `id` turns the string into a number
      map((users: User[]) => users.find(user => user.groupId === "1"))
    ); 
  }

  getAllPets(){
    return this.http.get('https://pet-sitting-site-2.firebaseio.com/pets.json');
  }

  // CREATE
  createUser(user : User){
  return this.http.post('https://pet-sitting-site-2.firebaseio.com/users.json', JSON.stringify(user));
}
  createPet(pet : Pet){
  return this.http.post('https://pet-sitting-site-2.firebaseio.com/pets.json', JSON.stringify(pet));
  }
}


