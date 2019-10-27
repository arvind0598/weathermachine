import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent';
import LocationWrapper from './components/LocationWrapper';

const LocationEnhancedComponent = LocationWrapper(AppComponent);

const { API_KEY } = process.env;

// eslint-disable-next-line react/jsx-props-no-spreading
ReactDOM.render(<LocationEnhancedComponent API_KEY={API_KEY} />, document.getElementById('app'));
