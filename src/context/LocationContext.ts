import React from 'react';
import { LocationFetchStatus } from '../types';

export type LocationContextType = {
  status?: LocationFetchStatus;
  data?: Object;
};

const LocationContext = React.createContext<LocationContextType | null>(null);
LocationContext.displayName = 'LocationContext';

export default LocationContext;
