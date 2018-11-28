import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css'],
  providers: [DataService]
})
export class SitterListComponent implements OnInit {
  score : number = 3;
  displayRatingScore = 4;
  sitters : any = [];
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.fetchSitterData().subscribe(
      (data) => this.sitters = data
    );
  }

}
