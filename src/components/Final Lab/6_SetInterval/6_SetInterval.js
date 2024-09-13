import React, { useEffect, useState } from "react";

function SetInterval() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1> Counter: {counter}</h1>
    </div>
  );
}

export default SetInterval;
