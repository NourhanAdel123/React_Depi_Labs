import React, { useState } from "react";

function CounterUsingHooks() {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    counter > 1 && setCounter((prev) => prev - 1);
  };
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="counter-container">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterUsingHooks;
