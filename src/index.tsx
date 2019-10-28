import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent';

const { API_KEY } = process.env;

// eslint-disable-next-line react/jsx-props-no-spreading
ReactDOM.render(<AppComponent API_KEY={API_KEY} />, document.getElementById('app'));
