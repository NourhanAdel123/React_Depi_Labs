import { MyConsumer } from "../context";

function Fifth() {
  return (
    <>
      <h1>Fifth</h1>
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
    </>
  );
}

export default Fifth;
