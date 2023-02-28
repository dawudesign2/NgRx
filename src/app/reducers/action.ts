import { createAction, props } from '@ngrx/store';

export const initAction = createAction('init');

export const changeNameAction = createAction(
  'changeName',
  props<{ name: string }>()
);
