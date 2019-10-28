/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LocationContext, { LocationContextType } from '../../context/LocationContext';
import { CardComponentProps, LocationFetchStatus } from '../../types';
import SwitchComponent from './SwitchComponent';
import LoadingCard from './LoadingCard';
import ReadyCard from './ReadyCard';

type CardFrameProps = {
  status: LocationFetchStatus;
  currentDate: string;
  data?: CardComponentProps;
};

const displayCardContent = (data: CardFrameProps) => {
  if (data.status === 'FETCHED') {
    const temperatureInfo = 'Temperature Info.';
    const weatherInfo = 'Seems to be pretty cloudy. Gib Permission.';
    return (
      <ReadyCard
        temperatureInfo={temperatureInfo}
        weatherInfo={weatherInfo}
        currentDate={data.currentDate}
      />
    );
  }
  return <LoadingCard status={data.status} />;
};

const displaySwitchComponent = (status: LocationFetchStatus) => {
  if (status === 'FETCHED') {
    return <SwitchComponent unit="CELSIUS" />;
  }
  return null;
};


class CardFrameComponent extends React.Component<CardFrameProps, {}> {
  render() {
    return (
      <LocationContext.Consumer>
        {
          (context: LocationContextType) => {
            const { status } = context;
            return (
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4"> The Weather Machine </p>
                      <p className="subtitle is-6">
                        {
                          status === 'FETCHED' ? 'Fixed Location' : 'Placeholder Location'
                        }
                      </p>
                    </div>
                  </div>
                  {
                    displayCardContent(this.props)
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
