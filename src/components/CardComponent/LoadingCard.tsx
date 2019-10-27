import React, { CSSProperties } from 'react';

const flexStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const LoadingCard = () => (
  <div className="content" style={flexStyle}>
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
);

export default LoadingCard;
