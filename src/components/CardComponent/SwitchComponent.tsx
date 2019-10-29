import React from 'react';
import { TemperatureUnits } from '../../types';
import { invertUnit } from '../../utils';

type SwitchProps = {
  handleChange: Function;
  unit: TemperatureUnits;
};

const SwitchComponent = (props: SwitchProps) => {
  const { handleChange, unit } = props;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="card-footer-item is-capitalized" onClick={handleChange}>
      Switch to {invertUnit(unit).toLowerCase()}
    </a>
  );
};

export default SwitchComponent;
