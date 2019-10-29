import React from 'react';
import { TemperatureUnits } from '../../types';
import { getTemperatureValues } from '../../utils';

export type ReadyCardProps = {
  temperatureKelvin: number;
  currentUnit: TemperatureUnits;
  weatherInfo: string;
  currentDate: string;
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
