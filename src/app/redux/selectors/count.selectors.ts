import {createFeatureSelector, createSelector} from "@ngrx/store";
import {countNode, CountState} from "../reducers/count/count.reducer";

export const featureSelector = createFeatureSelector<CountState>('counter');

export const countSelector = createSelector(
  featureSelector,
  state => state.count
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
