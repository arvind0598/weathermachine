import React from 'react';
import { TemperatureUnits } from '../../types';

const invertUnit = (unit: TemperatureUnits): TemperatureUnits => (unit === 'CELSIUS' ? 'FARENHEIT' : 'CELSIUS');

type SwitchProps = {
  handleChange: Function;
  unit: TemperatureUnits;
};

const SwitchComponent = (props: SwitchProps) => {
  const { handleChange, unit } = props;
  return (
    <a href="#" className="card-footer-item is-capitalized" onClick={handleChange}>
      Switch to {invertUnit(unit).toLowerCase()}
    </a>
  );
};

export default SwitchComponent;
