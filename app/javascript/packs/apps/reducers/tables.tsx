import { types } from '../types';

const newTable = (action: any) => {
    return { id: action.id, contents: [] };
};

const newContent = (action: any) => {
    return { id: action.id, title: '新規追加', tableID: action.tableID };
};

let initialState: Array<any> = [];
export const tables = (state = initialState, action: any) => {
    switch (action.type) {
        case types.addTable:
            action.table.id = action.id;
            return [...state, newTable(action)];
        case types.removeTable:
            return removeTable(state, action);
        case types.addContent:
            return addContent(state, action);
        case types.removeContent:
            return removeContent(state, action);
        default:
            return state;
    }
};

const removeTable = (tables: any, action: any) => {
    tables.some((table: any, i: number) => {
        if (table.id === action.tableID) {
            tables.splice(i, 1);
            return true;
        }
        return false;
    });
    return [...tables];
};

const addContent = (tables: any, action: any) => {
    tables.some((table: any, i: number) => {
        if (table.id === action.tableID) {
            tables[i].contents.push(newContent(action));
            return true;
        }
        return false;
    });
    return [...tables];
};

const removeContent = (tables: any, action: any) => {
    tables.some((table: any, i: number) => {
        if (table.id === action.tableID) {
            deleteContent(table, action);
            return true;
        }
        return false;
    });
    return [...tables];
};

const deleteContent = (table: any, action: any) => {
    console.log(table.contents);
    table.contents.some((content: any, i: number) => {
        if (content.id === action.contentID) {
            table.contents.splice(i, 1);
            return true;
        }
        return false;
    });
    return table;
};
