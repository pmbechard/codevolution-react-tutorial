import React from 'react';

function FunctionClick() {
  function clickHandler(event) {
    console.log('button clicked', event);
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
