// CARD COMPONENT

export type CardComponentProps = {
  temperature: number;
  location: string;
  currentDate: string;
};

export type CardComponentState = {
  temperatureInfo: string;
  weatherInfo: string;
};

// SWITCH COMPONENT

export type TemperatureUnits = 'CELSIUS' | 'FARENHEIT';

export type TemperatureProps = {
  unit: TemperatureUnits;
};

export type TemperatureState = TemperatureProps;

// LOCATION WRAPPER

export type LocationFetchStatus = 'REQUESTING' | 'FETCHED' | 'FETCH_FAILED' | 'DENIED' | 'FETCHING';

// RESPONSE DATA

export type WeatherData = {
  location: string;
  temperature: number;
  weatherCode: number;
  weatherName: string;
  weatherIcon: string;
};
