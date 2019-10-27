import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent';
import LocationWrapper from './components/LocationWrapper';

const LocationEnhancedComponent = LocationWrapper(AppComponent);

ReactDOM.render(<LocationEnhancedComponent />, document.getElementById('app'));
