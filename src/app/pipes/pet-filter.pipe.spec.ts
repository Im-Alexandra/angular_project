
import { PetFilterPipe } from './pet-filter.pipe';
import { filter } from 'rxjs/operators';

import { TestBed } from '@angular/core/testing';

describe('PetFilterPipe', () => {
  let filter = new PetFilterPipe(); // Arrange

  beforeEach(() => {
    // sitters = 

   TestBed.configureTestingModule({
     declarations: [
       PetFilterPipe
     ],
   });  
  });

  it('Searching for copenha should give me 2 results', () => {
     // Arrage, Act, Assert
    let pets = [
      {animal: 'cat', name: 'Haha', location: 'Copenhagen'},
      {animal: 'dog', name: 'Hehe', location: 'Copenhagen'},
      {animal: 'cat', name: 'Hmm', location: 'Aalborg'},
      {animal: 'hamster', name: 'Ja', location: 'Hillerød'},
      {animal: 'flower', name: 'Nei', location: 'Vejle'},
    ];
    let result = filter.transform(pets, 'copenha'); // Act
    expect(result.length).toBe(2); //Assert (Expect)
    expect(result[0].name).toBe('Haha');
    expect(result[1].name).toBe('Hehe');
    
  });
});
