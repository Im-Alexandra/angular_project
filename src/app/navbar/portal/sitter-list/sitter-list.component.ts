import { Component, OnInit } from '@angular/core';
import { Sitter } from '../../../entities/sitter';
import { TempDataService } from '../../../temp-data.service';

@Component({
  selector: 'sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css']
})
export class SitterListComponent implements OnInit {

  sitters: Sitter[];
  
  constructor(private tempData: TempDataService) { 
    this.sitters = tempData.getSitters();
  }

  ngOnInit() {
  }

}
