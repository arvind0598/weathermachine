import React from 'react';
import { TemperatureUnits, TemperatureProps, TemperatureState } from '../../types';

const invertUnit = (unit: TemperatureUnits): TemperatureUnits => (unit === 'CELSIUS' ? 'FARENHEIT' : 'CELSIUS');

class SwitchComponent extends React.Component<TemperatureProps, TemperatureState> {
  constructor(props: TemperatureProps) {
    super(props);
    const { unit } = props;
    this.state = {
      unit: unit === 'FARENHEIT' ? 'CELSIUS' : 'FARENHEIT',
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
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className="card-footer-item is-capitalized" onClick={this.switchUnits}>
        Switch to {unit.toLowerCase()}
      </a>
    );
  }
}

export default SwitchComponent;
