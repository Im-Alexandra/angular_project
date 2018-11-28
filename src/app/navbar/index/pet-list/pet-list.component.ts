import { DataService } from './../../../data.service';
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
    this.dataService.fetchPetData().subscribe(
      (data) => this.pets = data
    );
  }

}
