import {createFeatureSelector, createSelector} from "@ngrx/store";
import {countNode, CountState} from "../reducers/count/count.reducer";
import {COUNTER_KEY} from "../actions/count.actions";

export const featureSelector = createFeatureSelector<CountState>(COUNTER_KEY);

export const countSelector = createSelector(
  featureSelector,
  state => state.count
);

export const updateAtSelector = createSelector(
  featureSelector,
  state => state.updatedAt
);


/*
export const selectCount = createSelector(
  selectCountFeature,
  (state: CountState): number => {
    return state.count;
  }
);

export const selectUpdateAt = createSelector(
  selectCountFeature,
  (state: CountState): number => {
    return state.updatedAt;
  }
);

 */
