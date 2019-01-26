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
    this.store.subscribe( () => this.update())
    this.update();
  }

  update() {
    const value:AppState = this.store.getState() as AppState;
    this.counter = value.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

}

