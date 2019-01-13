import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css'],
  providers: [DataService]
})
export class SitterListComponent implements OnInit {

  users : any = [];
  sitters: any = [];
  constructor(private dataService:DataService) {}
 
  ngOnInit() {
    const stream = this.dataService.getAllUsers()
    stream.subscribe(
      //(error) => console.log(error),
      (response: Response) => {
        // console.log(response);
        //looping through what we got which is an object
        
        for (let key in response){
          let value = response[key];
          this.sitters.push(value)
          // save them to local storage
          localStorage.setItem('users', JSON.stringify(this.sitters)); 
        }

      }
      
    );

   
  }


}
