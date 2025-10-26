// Example: useRef

import React, { useState,useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log('State:', count);
    console.log('Ref:', countRef.current);
  };

  return (
    <div className='tutorial'>
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;

// Explanation:

// In this example, we're using both useState and useRef to track the count.
// useState is used to track the count in the component's state.
// useRef is used to track the count in the component's ref.
// So when we click the increment button, the count in the state and the count in the ref 
// both increase by 1.
// But the value consoled is different.

// OUTPUT:

// First click:
// Count: 1
// State: 0 (console)
// Ref: 1 (console)

// Second click:
// Count: 2
// State: 1 (console)
// Ref: 2 (console)

// There is difference between console and UI, because console changes instantly, but UI 
// changes after re-render.

/*-----------------------------------------------------------------------------------*/


// Example: useRef with DOM

function App1() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className='tutorial'>
      <input ref={inputRef} type='text' placeholder='Type something...'/>
    </div>
  );
}

export {App1, App};

// This will help in focusing the input field when the component mounts. 
// Useref is used for dom elements. As it can be helpful in accessing the dom elements and 
// manipulating them.