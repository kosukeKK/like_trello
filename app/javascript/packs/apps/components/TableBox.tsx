import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Table from '../components/Table';
import { addTable } from '../actions';

const TableBox = (that: any) => (
    <div>
        <div className='table_box'>
            {showTables(that.tables)}
            <div className='add_table' onClick={(() => that.dispatch(addTable()))}></div>
        </div>
    </div>
);

const showTables = (tables: Array<any>) => {
    let list: Array<any> = [];
    for (let i = 0; i < tables.length; i++) {
        list.push(<Table key={tables[i].id} tableInfo={tables[i]} />);
    }
    return list;
};

const mapToStateApps = (state: any, unko: any) => state;
export default connect(mapToStateApps)(TableBox);
