import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pets } from '../entities/pets';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../common/custom.validators';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

// generate random pet id
petId: string = Math.random().toString(36).substr(2, 9);
constructor (private dataService : DataService) { }

ngOnInit() {
  console.log(this.petId);
}

  onSubmitAddPet(addPetForm){
  
    if (addPetForm.valid){
      let pet = addPetForm.value as Pets;
      console.log(pet);
      // this.dataService.createSitter(sitter).subscribe(
      //   (response: Response) => {
      //     console.log(response);
      //   }
      // );
    }else{
      this.addPetForm.setErrors({
        invalidSitterRegister : true
      })
    }
  }

  addPetForm = new FormGroup ({
    name : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    animal : new FormControl('', [
      Validators.required
    ]),
    location : new FormControl('', [
      Validators.required
    ]),
    description : new FormControl('', [
      Validators.required
    ]),
    picture : new FormControl('data:image/jpeg;base64,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',),
    petId : new FormControl(this.petId,),
    userId : new FormControl(1)
  })
  
  get name(){
    return this.addPetForm.get('name')
  }
  
  get animal(){
    return this.addPetForm.get('animal')
  }
  
  get location(){
    return this.addPetForm.get('location')
  }
  
  get description(){
    return this.addPetForm.get('description')
  }
  
  get picture(){
    return this.addPetForm.get('picture')
  }

}
