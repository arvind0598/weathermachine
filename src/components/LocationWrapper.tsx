import React from 'react';
import { LocationFetchStatus } from '../types';
import { LocationProvider } from '../context/LocationContext';
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
  class LocationWrapper extends React.Component<LocationWrapperProps, LocationWrapperState> {
    constructor(props) {
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
      console.log(data);
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
          console.log(data);
          this.setState({
            status: 'FETCHED',
            weatherData: data,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            status: 'FETCH_FAILED',
          });
        });
    }

    handleDeniedLocation(err: PositionError) {
      console.log(err);
      this.setState({
        status: 'DENIED',
      });
    }

    render() {
      const { status, weatherData } = this.state;
      return (
        <LocationProvider value={weatherData}>
          <WrappedComponent status={status} />
        </LocationProvider>
      );
    }
  }

  LocationWrapper.displayName = `LocationWrapper(${getDisplayName(WrappedComponent)})`;
  return LocationWrapper;
};

export default LocationWrapper;
