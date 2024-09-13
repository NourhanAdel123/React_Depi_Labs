import React from "react";

function Third(props) {
  const { fname, lname, age, location, region, skills, children } = props;

  return (
    <>
      {children}
      <h2>Here is some information about me</h2>
      <h3>
        My Name is: {fname} {lname}
      </h3>
      <h3>I'm {age} years old</h3>
      <h3>I live in {location}</h3>
      <h3>I'm {region}</h3>
      <h3>My skills are: {skills.join(", ")}</h3>
    </>
  );
}

export default Third;
