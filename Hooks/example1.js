// Example: useState

const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

// Explanation of example:
// when button is clicked, increment function is called which updates the count state
// and the component is re-rendered with the new count value
