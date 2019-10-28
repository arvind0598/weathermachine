/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { LocationContextType, LocationConsumer } from '../../context/LocationContext';
import { getDisplayName } from '../../utils';

type LocationCardProps = {
  currentDate: string;
};

const LocationCardWrapper = (WrappedComponent) => {
  class Wrapper extends React.Component<LocationCardProps, {}> {
    render() {
      return (
        <LocationConsumer>
          {
            (context: LocationContextType) => {
              const { currentDate } = this.props;
              const { status, data } = context;
              return (
                <WrappedComponent
                  currentDate={currentDate}
                  status={status}
                  data={data}
                />
              );
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
