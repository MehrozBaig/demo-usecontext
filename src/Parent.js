import React, { useState } from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
      Parent Component
      <Child num={props.num}></Child>
    </div>
  );
}

export default Parent;
