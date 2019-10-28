import React, { CSSProperties } from 'react';
import { LocationFetchStatus } from '../../types';

const flexStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

type LoadingCardProps = {
  status: LocationFetchStatus;
};

const displayMessage = (status: LocationFetchStatus): string => {
  switch (status) {
    case 'DENIED':
      return 'Permission for location was denied.';
    case 'FETCHING':
      return 'Please wait while we fetch weather data.';
    case 'FETCH_FAILED':
      return 'There was an error while fetching data. Please try again later.';
    case 'REQUESTING':
      return 'Please provde location permissions to continue.';
    default:
      return null;
  }
};

const LoadingCard = (props: LoadingCardProps) => {
  const { status } = props;
  return (
    <div className="content" style={flexStyle}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
      <p className="subtitle is-6 has-text-centered"> {displayMessage(status)} </p>
    </div>
  );
};

export default LoadingCard;
