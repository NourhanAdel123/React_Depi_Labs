import React, { useEffect, useState } from "react";

function LogMessage() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("hello");
  });
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default LogMessage;
