// Example: useContext

import React, { useState, useContext, createContext } from "react";

// --- 1. Create the Context ---
// This creates a context object. We give it a default value.
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}, // A default empty function for safety
});

// --- 2. Provide the Context ---
// This is our main App component.
// It will hold the state (the actual theme value) and provide it
// to all children wrapped inside <ThemeContext.Provider>.
export default function App() {
  const [theme, setTheme] = useState("light"); // The actual state

  // The function to change the theme
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  // We pass the current theme AND the function to change it
  // down to all children via the 'value' prop.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        <h1>useContext Example</h1>
        <p>
          The current theme is: <strong>{theme}</strong>
        </p>
        <hr />
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

// --- 3. Consume the Context (in a child) ---
// This component is a child of App.
// It doesn't receive any props.
function Toolbar() {
  return (
    <div>
      <h2>Toolbar Component</h2>
      <ThemedButton />
    </div>
  );
}

// --- 3b. Consume the Context (in a grandchild) ---
// This component is nested even deeper.
// It uses the 'useContext' hook to access the theme.
function ThemedButton() {
  // Here is the magic!
  // We call useContext and pass it the *context object* we created.
  // It returns whatever was passed to the 'value' prop in the Provider.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{ backgroundColor: theme === "light" ? "#F5F1F0" : "#827E7E" }}
    >
      Click Me
    </button>
  );
}



// Explaination steps:

// 1. createContext: This creates a context object. We give it a default value.

// 2. ThemeContext: This is our context object. We give it a default value.

// 3. App: This is our main App component. It will hold the state (the actual theme value) 
// and provide it to all children wrapped inside <ThemeContext.Provider>.

// 4. Toolbar: This component is a child of App. It doesn't receive any props.

// 5. ThemedButton: This component is nested even deeper. It uses the 'useContext' hook 
// to access the theme.

// 6. useContext: This hook is used to access the context value.

// 7. when we click on the button, it calls the toggleTheme function which updates the theme 
// state. This state update triggers a re-render of the App component and all its children.
// The ThemedButton component receives the updated theme value and re-renders with the new theme.
