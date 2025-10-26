// Example: Functional Component

import { useState, useEffect } from "react";

const FunctionComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect Hook to replicate componentDidMount and componentDidUpdate
  useEffect(() => {
    // This code block runs after every render
    console.log("Component did mount or update");

    // Clean-up function (replicating componentWillUnmount)
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionComponent;
