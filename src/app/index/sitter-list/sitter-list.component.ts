import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { UsersActions } from './../../actions/users.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { Users } from 'src/app/entities/user';

@Component({
  selector: 'sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css'],
  providers: [DataService, UsersActions]
})
export class SitterListComponent implements OnInit {

  users : any = [];
  sitters: any = [];
  // @select('users') public users$: Observable<Users>;
  constructor(private dataService:DataService, 
    // public actions: UsersActions
    ) { 
    // actions.getUsers();
  }

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
        }
        // for (let key in this.sitters){
        //   let sitter = this.sitters[key]
        //   sitter.groupId 
        // }

      }
    );

   
  }

}
