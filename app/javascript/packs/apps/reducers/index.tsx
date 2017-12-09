import { combineReducers } from 'redux';
import { types } from '../types';

const table = (action: any) => {
    return { id: action.id };
};

let initialState: Array<any> = [];

const tables = (state = initialState, action: any) => {
    switch (action.type) {
        case types.addTable:
            action.table.id = action.id;
            return [...state, table(action)];
        case types.removeTable:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    state.splice(i, 1);
                    break;
                }
            }
            return [...state];
        default:
            return state;
    }
};

export const reducers = combineReducers({ tables });
