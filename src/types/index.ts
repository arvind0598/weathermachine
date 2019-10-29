export type TemperatureUnits = 'CELSIUS' | 'FARENHEIT';

/**
 * @see utils for a brief description about these states.
 */
export type LocationFetchStatus = 'REQUESTING' | 'FETCHED' | 'FETCH_FAILED' | 'DENIED' | 'FETCHING';

/**
 * @see utils to know how the API response is converted into this.
 * its also used in @see LocationContext to propagate changes.
 */
export type WeatherData = {
  location: string;
  temperature: number;
  weatherCode: number;
  weatherName: string;
  weatherIcon: string;
};
