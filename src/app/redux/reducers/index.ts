import {Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from "@ngrx/store";
import { environment} from "../../../environments/environment";
import { countReducer, CountState } from "./count/count.reducer";
import {COUNTER_KEY} from "../actions/count.actions";



export interface State {
  [COUNTER_KEY]: CountState
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: countReducer
};

export const metaReducers: MetaReducer<State> [] = !environment.production ? [] : [];
