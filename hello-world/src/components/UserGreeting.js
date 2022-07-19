import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome back, User!</div>;
    // } else {
    //   return <div>Welcome, Guest!</div>;
    // }

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome back, User!</div>;
    // } else {
    //   message = <div>Welcome, Guest!</div>;
    // }
    // return <div>{message}</div>;

    return this.state.isLoggedIn ? (
      <div>Welcome back, User!</div>
    ) : (
      <div>Welcome, Guest!</div>
    );

    // return this.state.isLoggedIn && <div>Welcome back, User!</div>;
  }
}

export default UserGreeting;
