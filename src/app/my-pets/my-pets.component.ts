import { AllActions } from './../users.actions';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  @select() counter;
  // could also be @select('counter') count;
  // OR if in IAppstate you have messaging: { newMessages: number} -> then use 
  // @select(['messaging', 'newMessages']) newMessages;
  // OR @select((s: IAppState) => s.messaging.newMessages) newMessages;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
    })
   }

  ngOnInit() {
  }

  counterClick(){
    this.ngRedux.dispatch({ type: AllActions.INCREMENT});
  }

}
