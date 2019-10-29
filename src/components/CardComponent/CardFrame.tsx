/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LocationContext, { LocationContextType } from '../../context/LocationContext';
import { LocationFetchStatus, WeatherData } from '../../types';
import SwitchComponent from './SwitchComponent';
import LoadingCard from './LoadingCard';
import ReadyCard from './ReadyCard';

type CardFrameProps = {
  currentDate: string;
};

const displayCardContent = (status: LocationFetchStatus, data: WeatherData, currentDate: string) => {
  if (status === 'FETCHED') {
    return (
      <ReadyCard
        temperatureKelvin={data.temperature}
        weatherInfo={data.weatherName}
        currentDate={currentDate}
      />
    );
  }
  return <LoadingCard status={status} />;
};

const displaySwitchComponent = (status: LocationFetchStatus) => {
  if (status === 'FETCHED') {
    return <SwitchComponent unit="CELSIUS" />;
  }
  return null;
};

const getIconElement = (status: LocationFetchStatus, data: WeatherData) => {
  if (status === 'FETCHED') return <img src={`http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`} alt={data.weatherName} />;
  return <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />;
};

class CardFrameComponent extends React.Component<CardFrameProps, {}> {
  render() {
    return (
      <LocationContext.Consumer>
        {
          (context: LocationContextType) => {
            const { status, data } = context;
            const { currentDate } = this.props;
            return (
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        {
                          getIconElement(status, data)
                        }
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4"> The Weather Machine </p>
                      <p className="subtitle is-6">
                        {
                          status === 'FETCHED' ? data.location : 'Placeholder Location'
                        }
                      </p>
                    </div>
                  </div>
                  {
                    displayCardContent(status, data, currentDate)
                  }
                </div>
                <footer className="card-footer">
                  <a href="https://github.com/arvind0598/weathermachine" className="card-footer-item"> View Source </a>
                  {
                    displaySwitchComponent(status)
                  }
                </footer>
              </div>
            );
          }
        }
      </LocationContext.Consumer>
    );
  }
}

export default CardFrameComponent;
