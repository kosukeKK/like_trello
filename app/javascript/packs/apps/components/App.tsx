import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TableBox from '../components/TableBox';

const App = () => (
    <div>
        <TableBox />
    </div>
);

const mapToStateApps = (state: any) => {
    return state;
};

export default connect(mapToStateApps)(App);
