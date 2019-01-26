import { Component, Inject } from '@angular/core';
import {Action, ActionCreator,  Store} from 'redux';
import {AppStore} from "./app.store";
import {AppState} from "./app.state";
import * as CounterActions from './counter.actions';
import {INCREMENT} from "./counter.actions";

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
    let incrAction:Action =  {
      type: INCREMENT
    }

    let addAction: ActionCreator<Action> = (args) => ({...incrAction})

    // 1st option
    this.store.dispatch(incrAction)
    // 2nd option
    this.store.dispatch(CounterActions.increment());
    // 3rd option
    this.store.dispatch(addAction());

  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

}

