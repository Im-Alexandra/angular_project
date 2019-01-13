import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../../pet-list/pet/pet.service';
import { Pet } from 'src/app/entities/pet';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.css']
})
export class SitterComponent implements OnInit {
  
  constructor(private dataService : DataService, private router: Router, private route: ActivatedRoute) { }

  users:any;
  id:string;
  user: User;

  ngOnInit() {

    this.route.params.subscribe(params => {
    this.id = params["id"];
    console.log(this.id);
    
    this.users = JSON.parse(localStorage.getItem("users"));
    console.log(this.users)

    this.user = this.users.filter(obj => {
      return obj.userId === this.id
    })
    console.log(this.user)

  })
  
}

}
