import { types } from '../types';

let table = {};
let id = 0;
export const addTable = () => {
    return { type: types.addTable, table, id: ++id };
};

export const removeTable = (id: number) => {
    return { type: types.removeTable, id: id };
};
