import React from 'react';
import { LocationFetchStatus, WeatherData } from '../types';

export type LocationContextType = {
  status?: LocationFetchStatus;
  data?: WeatherData;
};

const LocationContext = React.createContext<LocationContextType | null>(null);
LocationContext.displayName = 'LocationContext';

export default LocationContext;
