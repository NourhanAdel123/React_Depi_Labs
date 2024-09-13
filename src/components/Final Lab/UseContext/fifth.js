import { useContext } from "react";
import { MyContext } from "./first";

function Fifth() {
  const value = useContext(MyContext);
  const { name, age, profession } = value;
  return (
    <>
      <h1>Fifth</h1>
      <h2>
        Hello, {name}. You are {age} years old and work as a {profession}.
      </h2>
    </>
  );
}

export default Fifth;
