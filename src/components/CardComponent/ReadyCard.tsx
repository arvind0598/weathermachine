import React from 'react';
import { TemperatureUnits } from '../../types';

export type ReadyCardProps = {
  temperatureKelvin: number;
  currentUnit: TemperatureUnits;
  weatherInfo: string;
  currentDate: string;
};

const getTemperatureValues = (tempKelvin: number): Array<string> => {
  const tempCelsius = tempKelvin - 273.15;
  const tempFarenheit = (tempCelsius - 32) / 1.8;
  const degree = String.fromCharCode(176);
  return [`${tempCelsius} ${degree}C`, `${tempFarenheit} ${degree}F`];
};

const ReadyCard = (props: ReadyCardProps) => {
  const {
    temperatureKelvin,
    weatherInfo,
    currentDate,
    currentUnit,
  } = props;
  const [tempCelsius, tempFarenheit] = getTemperatureValues(temperatureKelvin);

  return (
    <>
      <div className="content">
        {`${weatherInfo}. Seems to be about ${currentUnit === 'CELSIUS' ? tempCelsius : tempFarenheit} outside.`}
      </div>
      <time dateTime="null">
        {currentDate}
      </time>
    </>
  );
};

export default ReadyCard;
