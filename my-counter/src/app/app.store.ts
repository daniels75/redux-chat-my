import {InjectionToken} from "@angular/core";
import {AppState} from "./app.state";
import {createStore, Store} from "redux";
import {reducer} from "./counter.reducer";


export const AppStore = new InjectionToken('App.store')

export  function createAppStore(): Store<AppState> {
  return createStore(reducer);
}

export const appStoreProvider = [
  {provide: AppStore, useFactory: createAppStore}
]



