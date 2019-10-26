export type CardComponentProps = {
  temperature: number;
  location: string;
  currentDate: string;
};

export type CardComponentState = {
  temperatureInfo: string;
  weatherInfo: string;
};

export type TemperatureUnits = 'CELSIUS' | 'FARENHEIT';

export type TemperatureProps = {
  unit: TemperatureUnits;
};

export type TemperatureState = TemperatureProps;
