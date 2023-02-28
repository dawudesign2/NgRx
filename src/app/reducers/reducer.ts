import { ActionReducer, MetaReducer, createReducer, on } from '@ngrx/store';
import { initAction, changeNameAction } from './action';

export const initialState = {
  name: 'Angular', 
  users: {
    name: 'John',
    isAdmin: false
  }
};

function log(reducer:ActionReducer<any>) : ActionReducer<any> {
  return (state, action) => {
    const currentState = reducer(state, action);
    console.log('previous state ', state);
    console.log('action', action);
    console.log('next state', currentState);
    return currentState;
  };
}

export const metaReducers: MetaReducer[] = [log];
export const rootReducer = createReducer(initialState, 
    on(initAction, (state) => ({
        ...state, 
        users : {
            ...state.users,
            isAdmin: true
        }
    })),
    on(changeNameAction, (state, { name }) => ({
        ...state,
        users : {
            ...state.users,
            name
        }
    })
));
