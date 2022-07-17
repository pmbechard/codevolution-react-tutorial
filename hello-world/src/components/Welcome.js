import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <p>
        Welcome to my React app, {this.props.type} of {this.props.name}.
      </p>
    );
  }
}

export default Welcome;
