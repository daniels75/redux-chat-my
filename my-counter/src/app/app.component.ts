import { Component, Inject } from '@angular/core';
import {Store} from 'redux';
import {AppStore} from "./app.store";
import {AppState} from "./app.state";
import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    
  }

  increment() {

  }

  decrement() {

  }

}
