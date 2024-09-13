import React, { useEffect, useState } from "react";

function ListenerToWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>Window Width: {width}</h1>
    </div>
  );
}

export default ListenerToWindowSize;
