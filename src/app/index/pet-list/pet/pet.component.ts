import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
                private router : Router,
                private service: DataService) { }
  pets:any;
  pet:any;
  id:string;
  petPicture:any;
  
  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = params["id"];
    // console.log(this.id);
    
    this.pets = JSON.parse(localStorage.getItem("pets"));
    // console.log(this.users)

    this.pet = this.pets.filter(obj => {
      return obj.petId === this.id
    })
    console.log(this.pet)
    this.petPicture = this.pet[0].petPicture;
    })
  }

}
