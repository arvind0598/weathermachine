import React from 'react';
import { LocationFetchStatus } from '../types';

type LocationWrapperState = {
  status: LocationFetchStatus;
};

const getDisplayName = (component) => (component.displayName || component.name || 'Component');

const LocationWrapper = (WrappedComponent) => {
  class LocationWrapper extends React.Component<{}, LocationWrapperState> {
    constructor(props) {
      super(props);
      this.state = {
        status: 'REQUESTING',
      };
      this.getUserLocation = this.getUserLocation.bind(this);
      this.fetchWeatherData = this.fetchWeatherData.bind(this);
      this.handleDeniedLocation = this.handleDeniedLocation.bind(this);

      this.getUserLocation(this.fetchWeatherData, this.handleDeniedLocation);
    }

    getUserLocation(success: PositionCallback, error: PositionErrorCallback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      }
      this.setState({
        status: 'DENIED',
      });
    }

    fetchWeatherData(data: Position) {
      console.log(data);
      this.setState({
        status: 'FETCHING',
      });
    }

    handleDeniedLocation(err: PositionError) {
      console.log(err);
      this.setState({
        status: 'DENIED',
      });
    }

    render() {
      const { status } = this.state;
      return <WrappedComponent status={status} />;
    }
  }

  LocationWrapper.displayName = `LocationWrapper(${getDisplayName(WrappedComponent)})`;
  return LocationWrapper;
};

export default LocationWrapper;
