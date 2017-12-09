import { types } from '../types';

let table = {};
let tableId = 0;
export const addTable = () => {
    return { type: types.addTable, table, id: tableId++ };
};

export const removeTable = (tableID: number) => {
    return { type: types.removeTable, tableID: tableID };
};

let content = {};
let contentId = 0;
export const addContent = (tableID: number) => {
    return { type: types.addContent, id: contentId++, tableID};
};

export const removeContent = (contentID: number, tableID: number) => {
    return {type: types.removeContent, contentID, tableID};
};
