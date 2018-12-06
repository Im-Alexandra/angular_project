import { DataService } from 'src/app/data.service';
import { Pets } from './../../../entities/pets';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PetService {

  constructor(private dataService : DataService) { }

  getPets(){
    // TODO: send the message _after_ fetching the heroes
    return this.dataService.fetchPetData();
  }

  getPet(id: string) {
    return this.getPets().pipe(
      // (+) before `id` turns the string into a number
      map((pets: Pets[]) => pets.find(pet => pet.petId === id))
    );
  }
}
