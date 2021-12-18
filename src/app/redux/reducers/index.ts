import {Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from "@ngrx/store";
import { environment} from "../../../environments/environment";
import { countReducer, CountState } from "./count/count.reducer";



export interface State {
  counter: CountState
}

export const reducers: ActionReducerMap<State> = {
  counter: countReducer
};

export const metaReducers: MetaReducer<State> [] = !environment.production ? [] : [];
