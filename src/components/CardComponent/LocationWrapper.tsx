/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { LocationConsumer } from '../../context/LocationContext';
import { getDisplayName } from '../../utils';


const LocationCardWrapper = (WrappedComponent) => {
  class Wrapper extends React.Component {
    render() {
      return (
        <LocationConsumer>
          {
            (data) => {
              if (data) {
                return (
                  <WrappedComponent
                    temperature={data.main.temp}
                    location={data.name}
                    currentDate={this.props.currentDate}
                  />
                );
              }
              return null;
            }
          }
        </LocationConsumer>
      );
    }
  }
  
  Wrapper.displayName = `LocationCardWrapper(${getDisplayName(WrappedComponent)})`;
  return Wrapper;
};

export default LocationCardWrapper;
