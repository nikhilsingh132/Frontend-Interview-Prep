// Example:  (Example of hoisting)

bye();
console.log(y);

var y = 10;

function bye() {
  console.log("bye");
}

// Output:

// bye
// undefined

// This is happening due to memory creation phase and code execution phase

// Step by step execution:
// 1. Memory creation phase:
//    a. Memory is allocated for the variable 'y', and it's initialized with 'undefined'.
//    b. Memory is allocated for the function 'bye', and the entire function code is stored.
// 2. Code execution phase:
//    a. The variable 'y' is assigned the value 10.
//    b. The function 'bye' is called.
//    c. The function 'bye' is executed.
