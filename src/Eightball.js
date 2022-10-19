import React, { useState } from 'react';
import Responses from './Responses.js';
import './Eightball.css';

const Eightball = ({props = Responses}) => { 
  const start = {msg: 'Think of a question.', color: 'black'};
  const [ballState, setBall] = useState(start)

  function random() {
    return props[Math.floor(Math.random() * props.length)];
  };

  let className = 'eightball ' + ballState.color;
  return (
    <>
      <div className={className} onClick={() => setBall(random())}>  
        {ballState.msg}
      </div>
      <button onClick={() => setBall(start)}>Reset</button>
    </>
  );
};

export default Eightball;