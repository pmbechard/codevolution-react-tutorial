import React from 'react';

// function Greet() {
//   return <h1>Hello, world!</h1>;
// }

// const Greet = ({props}) => {
//   return (
//     <div>
//       <h1>
//         Hello, {props.type} of {props.name}!
//       </h1>
//       <h3>{props.children}</h3>
//     </div>
//   );
// };

// Destructuring props
const Greet = (props) => {
  const { name, type } = props;
  return (
    <div>
      <h1>
        Hello, {type} of {name}!
      </h1>
    </div>
  );
};

export default Greet;
