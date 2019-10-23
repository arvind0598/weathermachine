import React from 'react';

import { HelloMessageProps } from '../types';

class HelloMessage extends React.Component<HelloMessageProps, {}> {
    render() {
        return (
            <div>
                { `${this.props.message}, ${this.props.name}`}
            </div>
        )
    }
};

export default HelloMessage;
