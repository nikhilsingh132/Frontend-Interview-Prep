// Example: Controlled Component

import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}

// Here we are using useState to manage the state of the input.
// We are using onChange event to update the state.
// We have the control over the input. We can validate the input, format the input,
// etc. in real time.
// We can also disable the input based on the state.

/*-----------------------------------------------------------------------------------*/

// Example: Uncontrolled Component

import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

// Here we are using useRef to get the value of the input.
// We are using ref to get the value of the input.
// We are using onSubmit event to get the value of the input.
// We don't have the control over the input. We cant validate the input, format the input, etc.
// We can only get the value of the input when the form is submitted.
