import { TemperatureUnits, WeatherData } from '../types';

export const invertUnit = (unit: TemperatureUnits): TemperatureUnits => (unit === 'CELSIUS' ? 'FARENHEIT' : 'CELSIUS');

export const getCurrentDateString = (): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date().toLocaleString('en-US', dateOptions);
};

export const prepareWeatherData = (data: Object): WeatherData => ({
  location: data.name,
  temperature: data.main.temp,
  weatherCode: data.weather[0].id,
  weatherName: data.weather[0].main,
  weatherIcon: data.weather[0].icon,
});

export const getTemperatureValues = (tempKelvin: number): Array<string> => {
  const tempCelsius = tempKelvin - 273.15;
  const tempFarenheit = (tempCelsius * 1.8) + 32;
  const degree = String.fromCharCode(176);
  return [`${tempCelsius} ${degree}C`, `${tempFarenheit} ${degree}F`];
};

export const getWeatherClass = (weatherCode: number): string => {
  if (weatherCode === 800) {
    return 'has-gradient-clear';
  }

  const weatherGroup = Math.floor(weatherCode / 100);
  let weatherClass: string;
  switch (weatherGroup) {
    case 2: weatherClass = 'thunderstorm'; break;
    case 3: weatherClass = 'drizzle'; break;
    case 5: weatherClass = 'rain'; break;
    case 6: weatherClass = 'snow'; break;
    case 8: weatherClass = 'clouds'; break;
    default: weatherClass = 'none';
  }
  return `has-gradient-${weatherClass}`;
};
