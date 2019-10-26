import React from 'react';

import { CardComponentProps, CardComponentState } from '../../types';
import SwitchComponent from './SwitchComponent';

class CardComponent extends React.Component<CardComponentProps, CardComponentState> {
  constructor(props: CardComponentProps) {
    super(props);
    this.state = {
      temperatureInfo: 'Grant Location Permissions.',
      weatherInfo: 'Seems to be pretty cloudy. Gib Permission.',
    };
  }

  render() {
    const { temperatureInfo, weatherInfo } = this.state;
    const { currentDate } = this.props;
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
                {temperatureInfo}
              </p>
            </div>
          </div>
          <div className="content">
            {weatherInfo}
            <br />
            <br />
          </div>
          <time dateTime="null">
            {currentDate}
          </time>
        </div>
        <footer className="card-footer">
          <a href="https://github.com/arvind0598/weathermachine" className="card-footer-item"> View Source </a>
          <SwitchComponent unit="CELSIUS" />
        </footer>
      </div>
    );
  }
}

export default CardComponent;
