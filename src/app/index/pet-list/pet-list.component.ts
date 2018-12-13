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
    const stream = this.dataService.fetchPetData()
    
    stream.subscribe(
      (data) => {
        this.pets = data;
        console.log(this.pets);
      }
    );
  }

}
