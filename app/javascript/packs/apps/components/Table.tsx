import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { removeTable } from '../actions';
const Table = (that: any) => (
    <div className='table'>
        タイトル
        {that.tableInfo.id}
        <button onClick={(r) => dropTable(that)}>消す</button>
    </div>
);

const dropTable = (that: any) => {
    that.dispatch(removeTable(that.tableInfo.id));
};

const mapToStateApps = (state: any, sample: any) => {
    return state;
};

export default connect(mapToStateApps)(Table);
