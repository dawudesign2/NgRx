import { ActionReducer, MetaReducer, createReducer, on } from '@ngrx/store';
import { initAction, changeNameAction } from './action';
import { RootState, State } from '../common/interface';


export const initialState: RootState = {
  name: 'Angular', 
  users: {
    name: 'David',
    isAdmin: false
  }
};

function log(reducer:ActionReducer<State>) : ActionReducer<State> {
  return (state, action) => {
    const currentState = reducer(state, action);
    console.log('previous state ', state);
    console.log('action', action);
    console.log('next state', currentState);
    return currentState;
  };
}

export const metaReducers: MetaReducer[] = [log];
export const rootReducer = createReducer<RootState>(initialState, 
    on(initAction, (state: RootState) => ({
        ...state, 
        users : {
            ...state.users,
        }
    })),
    on(changeNameAction, (state: RootState, { name }) => ({
        ...state,
        users : {
            ...state.users,
            name,
            isAdmin: true
        }
    })
));
