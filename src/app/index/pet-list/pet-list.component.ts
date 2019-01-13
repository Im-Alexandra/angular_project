import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
  providers: [DataService]
})
export class PetListComponent implements OnInit {

  pets: any = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    const stream = this.dataService.getAllPets()
    
    stream.subscribe(
      (response:Response) => {
        //console.log(response);
        //looping through what we got which is an object
        for (let key in response) {
          let value = response[key];
          this.pets.push(value)
          // save them to local storage
          localStorage.setItem('pets', JSON.stringify(this.pets)); 
        }
        console.log(this.pets);
      }
    );
  }

}
