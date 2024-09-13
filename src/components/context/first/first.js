import React from "react";
import Second from "../second/second";
import { MyProvider } from "../context";

function First() {
  const userInfo = {
    name: "Nourhan",
    age: 20,
    profession: "Developer",
  };

  return (
    <>
      <h1>First</h1>
      <MyProvider value={userInfo}>
        <Second />
      </MyProvider>
    </>
  );
}

export default First;
