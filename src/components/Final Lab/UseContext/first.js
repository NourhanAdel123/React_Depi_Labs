import React from "react";
import Second from "./second";
export const MyContext = React.createContext();

function First() {
  const userInfo = {
    name: "Nourhan",
    age: 20,
    profession: "Developer",
  };

  return (
    <>
      <h1>First</h1>
      <MyContext.Provider value={userInfo}>
        <Second />
      </MyContext.Provider>
    </>
  );
}

export default First;
