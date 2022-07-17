import React from 'react';

// function Greet() {
//   return <h1>Hello, world!</h1>;
// }

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello, {props.type} of {props.name}!
      </h1>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Greet;
