import React from 'react';

import { LocationFetchStatus } from '../types';
import LocationContext, { LocationContextType } from '../context/LocationContext';
import CardFrame from './CardComponent/CardFrame';

const getCurrentDateString = (): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date().toLocaleString('en-US', dateOptions);
};

type AppComponentState = {
  status: LocationFetchStatus;
  longitude?: number;
  latitude?: number;
  weatherData?: Object;
};

type AppComponentProps = {
  API_KEY: string;
};

class AppComponent extends React.Component<AppComponentProps, AppComponentState> {
  constructor(props: AppComponentProps) {
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
      <LocationContext.Provider value={contextValue}>
        <div className="hero is-bold is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column" />
                <div className="column">
                  <CardFrame currentDate={getCurrentDateString()} status={status} />
                </div>
                <div className="column" />
              </div>
            </div>
          </div>
        </div>
      </LocationContext.Provider>
    );
  }
}

export default AppComponent;
