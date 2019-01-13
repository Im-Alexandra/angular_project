import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petFilter'
})
export class PetFilterPipe implements PipeTransform {

  transform(pets: any, term?: any): any {

    // check if search term is undefined
    if (term === undefined) return pets;

    // return updated pets array
    return pets.filter(function(pet:any){
      return pet.animal.toLowerCase().includes(term.toLowerCase()) ||
      pet.location.toLowerCase().includes(term.toLowerCase()) ||
      pet.name.toLowerCase().includes(term.toLowerCase())
    });
  }

}
