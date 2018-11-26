import { Injectable } from '@angular/core';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  private sitters: Sitter[] = [
    {
      sitterId: '1', 
      email: 'sitter1@sitter.dk', 
      birthDate: new Date(2000, 0, 1), 
      gender: 'female', 
      firstname: 'Alexandra', 
      lastname: 'Labusova', 
      education: 'Web Development', 
      picture: 'https://i.imgur.com/F9ChIdb.jpg',
      avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1136253/profile/profile-512.jpg?2', 
      description: "I don't hurt animals", 
      location: 'Copenhagen', 
      phone: '12345678',
      rating: [
        {
          parentId: 's1', 
          rating: 5, 
          description: "She did not hurt my hamster"
        }, 
        {
          parentId: 's2', 
          rating: 1, 
          description: "She did hurt my cat"
        }],
        schedule: undefined
      }
  ];

  constructor() { }

  public getSitters() : Sitter[] {
    return this.sitters;
  }

  public addSitter(sitter: Sitter) {
    this.sitters.push(sitter);
    // console.log(this.sitters);
  }

  public getSitter(id: string){
      return this.sitters.find(x => x.sitterId === id);
  }

 

}