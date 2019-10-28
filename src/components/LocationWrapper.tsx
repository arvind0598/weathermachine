import React from 'react';
import { LocationFetchStatus } from '../types';
import { LocationProvider, LocationContextType } from '../context/LocationContext';
import { getDisplayName } from '../utils';

type LocationWrapperState = {
  status: LocationFetchStatus;
  longitude?: number;
  latitude?: number;
  weatherData?: Object;
};

type LocationWrapperProps = {
  API_KEY: string;
};

const LocationWrapper = (WrappedComponent) => {
  class Wrapper extends React.Component<LocationWrapperProps, LocationWrapperState> {
    constructor(props: LocationWrapperProps) {
      super(props);
      this.state = {
        status: 'REQUESTING',
        weatherData: null,
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
      const { longitude, latitude } = data.coords;
      this.setState({
        status: 'FETCHING',
        longitude,
        latitude,
      }, this.requestWeatherData);
    }

    requestWeatherData() {
      const { longitude, latitude } = this.state;
      const { API_KEY } = this.props;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            status: 'FETCHED',
            weatherData: data,
          });
        })
        .catch(() => {
          this.setState({
            status: 'FETCH_FAILED',
          });
        });
    }

    handleDeniedLocation() {
      this.setState({
        status: 'DENIED',
      });
    }

    render() {
      const { status, weatherData } = this.state;
      const contextValue: LocationContextType = { status, data: weatherData };
      return (
        <LocationProvider value={contextValue}>
          <WrappedComponent status={status} />
        </LocationProvider>
      );
    }
  }

  Wrapper.displayName = `LocationWrapper(${getDisplayName(WrappedComponent)})`;
  return Wrapper;
};

export default LocationWrapper;
