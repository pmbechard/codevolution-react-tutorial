import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <p>
        Welcome to my React app, {type} of {name}.
      </p>
    );
  }
}

export default Welcome;
