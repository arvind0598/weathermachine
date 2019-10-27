/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { LocationContextType, LocationConsumer } from '../../context/LocationContext';
import { getDisplayName } from '../../utils';

const LocationCardWrapper = (WrappedComponent) => {
  class Wrapper extends React.Component {
    render() {
      return (
        <LocationConsumer>
          {
            (context: LocationContextType) => (<WrappedComponent currentDate={this.props.currentDate} {...context} />)
          }
        </LocationConsumer>
      );
    }
  }

  Wrapper.displayName = `LocationCardWrapper(${getDisplayName(WrappedComponent)})`;
  return Wrapper;
};

export default LocationCardWrapper;
