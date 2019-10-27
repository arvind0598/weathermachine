import React from 'react';
import { LocationConsumer } from '../../context/LocationContext';

const LocationCardWrapper = (WrappedComponent) => (props) => (
  <LocationConsumer>
    {
      (data) => {
        if (data) {
          return (
            <WrappedComponent
              temperature={data.main.temp}
              location={data.name}
              currentDate={props.currentDate}
            />
          );
        }
        return null;
      }
    }
  </LocationConsumer>
);

export default LocationCardWrapper;
