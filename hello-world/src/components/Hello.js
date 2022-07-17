import React from 'react';

const Hello = () => {
  // return React.createElement(
  //     'div',
  //     null,
  //     React.createElement(
  //       'h2',
  //       { id: 'hello', className: 'dummy-class' },
  //       'Hello, non-JSX'
  //     )
  //   );

  return (
    <div id='hello' className='dummy-class'>
      <h2>Hello, JSX</h2>
    </div>
  );
};

export default Hello;
