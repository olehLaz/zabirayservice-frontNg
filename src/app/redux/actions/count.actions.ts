import {createAction, props} from "@ngrx/store";

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  changeUpdatedAt = '[COUNT] changeUpdatedAt',
}

export const COUNTER_KEY = 'counter';


export const increase = createAction(countActionsType.increase);
export const decrease = createAction(countActionsType.decrease);
export const clear = createAction(countActionsType.clear);
export const changeUpdatedAt = createAction(countActionsType.changeUpdatedAt,
  props<{updatedAt:number}>()
);

/*
export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}
export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
}
export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}
export type CountActions = CountIncreaseAction | CountDecreaseAction | CountClearAction;// | any;
*/
