import React from "react";
import Fourth from "./fourth";
import { MyContext } from "./first";
import { useContext } from "react";

function Third() {
  const value = useContext(MyContext);
  const { name, age, profession } = value;
  return (
    <>
      <h1>Third</h1>
      <h2>
        Hello, {name}. You are {age} years old and work as a {profession}.
      </h2>
      <Fourth />
    </>
  );
}

export default Third;
