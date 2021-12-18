import {createAction} from "@ngrx/store";

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
}


export const increase = createAction(countActionsType.increase);
export const decrease = createAction(countActionsType.decrease);
export const clear = createAction(countActionsType.clear);



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
