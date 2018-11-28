import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css'],
  providers: [DataService]
})
export class SitterListComponent implements OnInit {

  sitters : any = [];
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.fetchSitterData().subscribe(
      (data) => this.sitters = data
    );
  }

}
