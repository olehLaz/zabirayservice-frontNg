
import {Action, createReducer, on, State} from "@ngrx/store";
import {changeUpdatedAt, clear, countActionsType, decrease, increase} from "../../actions/count.actions";
import {state} from "@angular/animations";

export const countNode = 'count';

export interface CountState {
  count: number;
  updatedAt?: number

}

export const initialState: CountState = {
  count: 0
}


export const countReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))

);

// или тоже работает
/*
export const countReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      };
    case countActionsType.decrease:
      return {
        ...state,
        count: state.count - 1
      };
    case countActionsType.clear:
      return {
        ...state,
        count: 0
      };
    default:
      return {...state};
  }

};
*/
