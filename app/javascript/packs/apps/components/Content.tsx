import * as React from 'react';
import { connect } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { removeContent } from '../actions';

const Contents = (that: any) => (
    <div>
        {that.contentInfo.title}
        {that.contentInfo.id}
        <button onClick={(r) => dropContent(that.dispatch, that.contentInfo)}>消す</button>
    </div>
);

const dropContent = (dispatch: any, contentInfo: any) => dispatch(removeContent(contentInfo.id, contentInfo.tableID));

const mapToStateProps = (state: any, contentInfo: any) => contentInfo;

export default connect(mapToStateProps)(Contents);
