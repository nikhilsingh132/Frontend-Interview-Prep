// Video reference: https://www.youtube.com/watch?v=vpE9I_eqHdM

// Definition:

// Hooks:
// Hooks are functions that allow you to "hook into" the React state and lifecycle
// features from function components. They enable the use of state, side effects,
// and other React features without the need for class components.

/*-----------------------------------------------------------------------------------*/

// Most important hooks:

// 1. useState: This hook allows functional components to manage state. It returns a stateful
// value and a function to update it.

// Pros:
// Simplifies State Management: useState allows you to manage state in functional
// components with ease.

// Cons:
// Complex State Handling: Managing multiple state variables can become complex, particularly
// in large components.

/*-----------------------------------------------------------------------------------*/

// 2. useEffect: This hook allows functional components to perform side effects. It is called
// after the component has been rendered to the DOM.

// Pros:
// Handles Side Effects: useEffect is designed to handle side effects like data fetching,
// subscriptions, or manually interacting with the DOM. It centralizes side effect management,
// which can lead to cleaner code.

// Cons:
// Dependency Management: Incorrectly specifying dependencies can lead to bugs, such as
// infinite loops or missed updates.

/*-----------------------------------------------------------------------------------*/

// 3. useContext: React Context provides a way to share data across your component tree without
// explicitly passing props down through every level (known as "prop drilling"). This is particularly
// useful for global data like themes, user authentication status, or language preferences.

// Pros:
// Centralized State Management: useContext allows you to share data across your component tree
// without explicitly passing props down through every level.

// Cons:
// Context Re-renders: Changes to context values trigger re-renders in all components consuming
// that context. This can lead to performance issues.

/*-----------------------------------------------------------------------------------*/

// 4. useReducer: An alternative to useState for more complex state logic, where state
// transitions depend on the previous state or involve multiple sub-values. It takes a
// reducer function and an initial state, returning the current state and a dispatch function.

// Pros:
// Manages Complex State: useReducer is ideal for managing complex state logic, especially
// when state updates depend on previous values or involve multiple state variables. It provides
// a more structured approach compared to useState.

// Cons:
// Increased Complexity: For simple state management needs, useReducer might add unnecessary
// complexity. It requires understanding of reducers and actions, which can be overkill for
// straightforward state updates.

/*-----------------------------------------------------------------------------------*/

// 5. useCallback: This hook returns a memoized callback function. It's useful for optimizing
// performance by preventing unnecessary re-renders of child components that rely on callback
// functions passed as props.

// Pros:
// Memoizes Callbacks: useCallback memoizes callback functions to prevent them from being
// recreated on every render. This is particularly useful for optimizing performance when
// passing callbacks to child components.

// Cons:
// Potential Overhead: Excessive use of useCallback can introduce unnecessary complexity
// and performance overhead. It’s best used in scenarios where callback functions are
// frequently recreated or passed down to child components.

/*-----------------------------------------------------------------------------------*/

// 6. useMemo: This hook returns a memoized value. It's used for optimizing performance by
// preventing expensive calculations from being re-run on every render if the dependencies
// haven't changed.

// Pros:
// Optimizes Performance: useMemo helps in optimizing performance by memoizing expensive
// calculations. It ensures that calculations are only re-evaluated when dependencies
// change, which can improve application efficiency.

// Cons:
// Overuse and Complexity: Overusing useMemo can lead to performance overhead and make
// the codebase more complex. It’s important to use it judiciously and focus on optimizing
// only where necessary.

/*-----------------------------------------------------------------------------------*/

// 7. useRef: This hook returns a mutable ref object whose .current property can be used to
// store a mutable value that persists across renders, or to directly access a DOM element.

// Pros:
// Access DOM elements directly (e.g., for focusing inputs).
// Store mutable values that persist between renders without triggering re-renders.

// Cons:
// Potential Misuse: Using useRef for state management or rendering logic can lead to
// confusing and less maintainable code. It’s intended for accessing DOM elements and
// storing mutable values, not for managing state.
