import React from "react";
import Fourth from "../fourth/fourth";
import { MyConsumer } from "../context";

function Third() {
  return (
    <>
      <h1>Third</h1>
      <MyConsumer>
        {(value) => {
          const { name, age, profession } = value;
          return (
            <h2>
              Hello, {name}. You are {age} years old and work as a {profession}.
            </h2>
          );
        }}
      </MyConsumer>
      <Fourth />
    </>
  );
}

export default Third;
