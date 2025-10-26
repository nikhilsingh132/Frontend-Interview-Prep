// Example: useEffect

useEffect(() => {
  console.log("Component rendered");
}, []);

// Explanation of example:
// useEffect is called after the component has been rendered to the DOM.
// The second argument is an array of dependencies. If the array is empty, the effect
// will only run once after the initial render.

/*-----------------------------------------------------------------------------------*/

// Example: useEffect with cleanup

useEffect(() => {
  console.log("Component rendered");
  return () => {
    console.log("Component unmounted");
  };
}, []);

// Explanation of example:
// cleanup function is used above to perform cleanup operations when the component is unmounted.
// This is useful for removing event listeners, canceling network requests, etc.

/*-----------------------------------------------------------------------------------*/

// Example: useEffect with dependencies

useEffect(() => {
  console.log("Component rendered");
}, [dependency]);

// Explanation of example:
// when dependency changes, useEffect is called and effect is re-run.
// if dependency is not changed, useEffect is not called.
// this re-run is called re-rendering.

