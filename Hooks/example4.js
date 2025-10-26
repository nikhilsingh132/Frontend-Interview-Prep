// Example: useReducer

import { useReducer } from "react";

// --- 1. Define the initial state ---
// This is the state our component will start with.
const initialState = { count: 0 };

// --- 2. Create the reducer function ---
// This function decides how to update the state based on an 'action'.
// It takes the current 'state' and an 'action' and returns the *new* state.
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      // In case an unknown action is dispatched
      throw new Error("Unknown action type");
  }
}

// --- 3. The Component ---
function Counter() {
  // Use the useReducer hook
  // It returns the current 'state' and a 'dispatch' function.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Read the state */}
      <h1>Count: {state.count}</h1>

      {/* Use the 'dispatch' function to send actions to the reducer.
        We send an object (the 'action') with a 'type' property.
      */}
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment (+)
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement (-)
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;

// Explanation of example:
// useReducer is used to manage state in a more complex way.
// When we click on the button, it calls the dispatch function which updates the state.
// This state update triggers a re-render of the Counter component and all its children.
