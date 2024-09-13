import React, { useEffect, useState } from "react";

function TrackStates() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    const handelMOuseMOve = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };
    window.addEventListener("mousemove", handelMOuseMOve);
    return () => {
      window.removeEventListener("mousemove", handelMOuseMOve);
    };
  }, []);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div>
      <h1>
        Mouse Position: ({x}, {y})
      </h1>
      <h2>Button Clicks: {clicks}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default TrackStates;
