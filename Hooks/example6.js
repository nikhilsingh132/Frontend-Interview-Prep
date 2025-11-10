// Example: useMemo

import { useState, useMemo } from "react";

// A massive list of 10,000 items
const bigList = new Array(10000).fill(null).map((_, i) => `Item ${i}`);

function App() {
  const [theme, setTheme] = useState("light");

  // --- This is the ONLY change (SOLUTION)---
  // We "memoize" the result of our expensive operation.
  const filteredList = useMemo(() => {
    // This log will now ONLY run when 'bigList' changes.
    console.log("Filtering 10,000 items... (This is slow!)");
    return bigList.filter((item) => item.includes("999"));
  }, [bigList]); // The dependency array

  // this causes PROBLEMS
  // const filteredList = bigList.filter(item => item.includes('999'));

  // Styles just to show a re-render
  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
    padding: "2rem",
  };

  return (
    <div style={style}>
      <h1>The SOLUTION</h1>
      <p>Open your console and click the button below.</p>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Toggle Theme
      </button>
      <p>Found {filteredList.length} items</p>
    </div>
  );
}

export default App;

// Explanation of example:
// When we click on the button, it calls the setTheme function which updates the theme state.
// This causes the App component to re-render.
// The useMemo hook is used to memoize the result of the expensive operation (filtering the list).
// The dependency array is used to specify the dependencies of the useMemo hook.
// This can take time to filter the list, but it only does so when the list changes.
// This is a solution to the problem of re-rendering the component when the theme changes.

// PROBLEM:
// The "Problem" Code (Without useMemo)
// First, let's see the problem. Every time we click "Toggle Theme," our app re-renders, and
// it re-filters the entire 10,000-item list, even though the list hasn't changed. This is a
// huge waste and makes the app feel slow.

// Result: When you run this, "Filtering 10,000 items..." logs to the console on every single
// click of "Toggle Theme." This is very inefficient. Which means it is checking the list
// every time the theme changes.

// SOLUTION:
// We'll wrap the expensive filter operation in useMemo. We'll give it [bigList] as a dependency.
// This tells React: "Only re-run this filter if bigList changes. If anything else (like theme)
// changes, just give me the old, saved value."
// Result: When you run this, "Filtering 10,000 items..." logs to the console only once on the
// first render. It doesn't log again when we toggle the theme.
