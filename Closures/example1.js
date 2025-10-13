// Example:

function createCounter() {
  let count = 0; // This 'count' variable is part of the closure's lexical environment

  return function increment() {
    count++;
    return count;
  };
}

const counter1 = createCounter(); // counter1 is now the 'increment' function,
// along with its closed-over 'count' variable

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // A new closure is created with its own 'count'
console.log(counter2()); // Output: 1

// In this example, "increment" is the inner function that forms a closure with the
// "createCounter" function's lexical environment. Even after "createCounter" has returned,
// the "increment" function (assigned to "counter1" and "counter2") still retains access to 
// and can modify its own "count" variable. This demonstrates how closures provide a way to
// maintain state and create private data.

// In this count's reference is send and not exactly the variable, so it is different for 
// "counter1" and "counter2"