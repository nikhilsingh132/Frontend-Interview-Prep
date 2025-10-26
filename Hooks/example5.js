// Example: useCallback

import React, { useState, useCallback } from "react";

// --- 1. The Child Component ---
// We wrap it in React.memo().
// This tells React: "Only re-render me if my 'onClick' prop changes."
const ClickMeButton = React.memo(({ onClick }) => {
  // This log is the most important part.
  console.log("CHILD re-rendered. (This is what we want to avoid!)");
  return <button onClick={onClick}>Click Me</button>;
});

// --- 2. The Parent Component ---
function App() {
  const [count, setCount] = useState(0);

  // This state is NOT related to the button.
  // Its only job is to make the parent 'App' component re-render.
  const [unrelatedText, setUnrelatedText] = useState("");

  // --- PROBLEM: This function is re-created on *every* render ---
  // const handleClick = () => {
  //   setCount(c => c + 1);
  // };

  // --- SOLUTION: This function is memoized (remembered) ---
  // It will be the *exact same function* between renders,
  // so React.memo will not re-render the child.
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Empty array means this function is created ONCE.

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <hr />

      {/* This child component gets 'handleClick' as a prop.
       */}
      <ClickMeButton onClick={handleClick} />

      <hr />
      <h3>Unrelated Input</h3>
      <p>Type here to make the PARENT re-render. Open your console.</p>

      {/* Every time you type, the 'App' component re-renders.
        This tests if the 'ClickMeButton' child *also* re-renders.
      */}
      <input
        type="text"
        value={unrelatedText}
        onChange={(e) => setUnrelatedText(e.target.value)}
      />
    </div>
  );
}

export default App;

// The main point is: useCallback is useless unless you are also using React.memo on a
// child component.
// React.memo: Prevents a child component from re-rendering if its props don't change.
// useCallback: Prevents a function (that you pass as a prop) from being re-created, so
// React.memo thinks the prop hasn't changed.

// Steps:
// Type in the input box.
// You will see the parent's text update.
// Look at the console. You will NOT see "CHILD re-rendered."
// This is useCallback and React.memo working perfectly. The parent re-rendered, 
// but the child did not.
// Type in the input box (after removing usecallback from function).
// Look at the console. You will now see "CHILD re-rendered." logging on every 
// single keystroke.