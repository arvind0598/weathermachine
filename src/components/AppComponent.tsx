import React from 'react';
// import CardComponent from './CardComponent';
import CardFrame from './CardComponent/CardFrame';
import LocationCardWrapper from './CardComponent/LocationWrapper';

const LocationEnhancedCard = LocationCardWrapper(CardFrame);

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

const AppComponent = () => (
  <div className="hero is-bold is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column" />
          <div className="column">
            <LocationEnhancedCard currentDate={getCurrentDateString()} />
          </div>
          <div className="column" />
        </div>
      </div>
    </div>
  </div>
);

export default AppComponent;
