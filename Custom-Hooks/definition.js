// When to use Custom Hooks?
// As the codebase grows, we start to see patterns emerging in our components.
// There are repeated patterns in our components. These patterns can be extracted into custom hooks.
// And these custom hooks can be used in other components.

// LocalStorage Hook:

import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;


// useState:
// When the component first runs, it tries to load the value from localStorage for that key.
// If there’s no stored value, it uses defaultValue.
// If parsing fails (like if the stored value isn’t valid JSON), it safely falls back to
// defaultValue.
// The result becomes the initial state of value.
// This is wrapped in a function so it only runs once during the first render (lazy 
// initialization).

// useEffect:
// Whenever the value or key changes:
// It updates localStorage with the new value (after converting it to JSON).
// That means your state and localStorage always stay in sync.

// Return:
// Just like useState, it returns:
// value: the current stored value
// setValue: a setter function to update it