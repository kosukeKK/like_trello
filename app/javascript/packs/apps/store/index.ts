import { createStore } from 'redux';
import { reducers } from '../reducers';
export const store = createStore(reducers, (<any>window).__REDUX_DEVTOOLS_EXTENSION__ &&  (<any>window).__REDUX_DEVTOOLS_EXTENSION__());
//export const store = createStore(reducers);
