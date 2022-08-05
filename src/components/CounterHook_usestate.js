import React, { useState } from 'react';

const CounterHook_usestate= () => {

  const [ count, setCount ] = useState(0);

  const incrementCount=() => {
    setCount(count+1);
  }
  const incrementCountTen=() => {
    for (let i = 0; i < 10; i++) {
      //(prevCount)は、直前のStateの値を参照し計算を行う
      setCount(prevCount=>prevCount+1)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>count</button>
      <button onClick={incrementCountTen}>count+10</button>
    </div>
  )
}

export default CounterHook_usestate;
