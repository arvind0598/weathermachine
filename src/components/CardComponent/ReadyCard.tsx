import React from 'react';

export type ReadyCardProps = {
  temperatureInfo: string;
  weatherInfo: string;
  currentDate: string;
};

const ReadyCard = (props: ReadyCardProps) => {
  const { temperatureInfo, weatherInfo, currentDate } = props;
  return (
    <>
      <div className="content">
        {`${temperatureInfo}, ${weatherInfo}`}
      </div>
      <time dateTime="null">
        {currentDate}
      </time>
    </>
  );
};

export default ReadyCard;