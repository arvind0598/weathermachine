import React from 'react';

import { HelloMessageProps } from '../types';

class HelloMessage extends React.Component<HelloMessageProps, {}> {
  getMessage(): string {
    const { message, name } = this.props;
    return `${message}, ${name}`;
  }

  render() {
    return (
      <div>
        { this.getMessage() }
      </div>
    );
  }
}

export default HelloMessage;
