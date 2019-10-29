import React from 'react';
import { TemperatureUnits, TemperatureProps, TemperatureState } from '../../types';
import UnitsContext from '../../context/UnitsContext';

const invertUnit = (unit: TemperatureUnits): TemperatureUnits => (unit === 'CELSIUS' ? 'FARENHEIT' : 'CELSIUS');

class SwitchComponent extends React.Component<TemperatureProps, TemperatureState> {
  constructor(props: TemperatureProps) {
    super(props);
    const { unit } = props;
    this.state = {
      unit: unit === 'FARENHEIT' ? 'FARENHEIT' : 'CELSIUS',
    };
    this.switchUnits = this.switchUnits.bind(this);
  }

  switchUnits(event: MouseEvent): void {
    event.preventDefault();
    this.setState((prevState) => ({
      unit: invertUnit(prevState.unit),
    }));
  }

  render() {
    const { unit } = this.state;
    const contextValue = unit;
    return (
      <UnitsContext.Provider value={contextValue}>
        <a href="#" className="card-footer-item is-capitalized" onClick={this.switchUnits}>
          Switch to {invertUnit(unit).toLowerCase()}
        </a>
      </UnitsContext.Provider>
    );
  }
}

export default SwitchComponent;
