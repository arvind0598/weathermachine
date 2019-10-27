import React from 'react';

const LocationContext = React.createContext({});
LocationContext.displayName = 'LocationContext';

export const LocationProvider = LocationContext.Provider;
export const LocationConsumer = LocationContext.Consumer;

export default LocationContext;
