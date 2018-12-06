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

  ngOnInit() {
  }

}
