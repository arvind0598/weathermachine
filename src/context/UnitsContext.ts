import React from 'react';
import { TemperatureUnits } from '../types';

const UnitsContext = React.createContext<TemperatureUnits>('CELSIUS');
UnitsContext.displayName = 'UnitsContext';

export default UnitsContext;
