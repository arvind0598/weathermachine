import React from 'react';
import { LocationFetchStatus } from '../types';

export type LocationContextType = {
  status?: LocationFetchStatus;
  data?: Object;
};

const LocationContext = React.createContext<LocationContextType | null>(null);
LocationContext.displayName = 'LocationContext';

export const LocationProvider = LocationContext.Provider;
export const LocationConsumer = LocationContext.Consumer;
