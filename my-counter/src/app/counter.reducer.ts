import {AppState} from "./app.state";
import {Action, Reducer} from "redux";
import {DECREMENT, INCREMENT} from "./counter.actions";

const initState:AppState = { counter: 0};

export const reducer: Reducer<AppState> =
  (state: AppState = initState, action: Action) => {
    if (action.type == INCREMENT) {
      return Object.assign({}, state, {counter : state.counter + 1})
    } else if (action.type == DECREMENT) {
      return Object.assign({}, state, {counter: state.counter -1 })
    }
    return state;
  }
