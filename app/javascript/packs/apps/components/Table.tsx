import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { removeTable } from '../actions';
import Content from '../components/Content';
import { addContent } from '../actions';

const Table = (that: any) => (
    <div className='table'>
        タイトル
        {that.tableInfo.id}
        <button onClick={(r) => dropTable(that)}>消す</button>
        {showContent(that.tableInfo.contents)}
        <div className='add_table' onClick={(() => that.dispatch(addContent(that.tableInfo.id)))}></div>
    </div>
);

const dropTable = (that: any) => {
    that.dispatch(removeTable(that.tableInfo.id));
};

const showContent = (contents: Array<any>) => {
    let list: Array<any> = [];
    for (let i = 0; i < contents.length; i++) {
        list.push(<Content key={contents[i].id} contentInfo={contents[i] } />);
    }
    return list;
};


const mapToStateApps = (state: any, tableInfo: any) => state;

export default connect(mapToStateApps)(Table);
