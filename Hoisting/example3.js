// Example:  (Example of hoisting)

console.log(bye);
console.log(y);

var y = 10;

function bye() {
  console.log("bye");
}

// Output:

// [Function: bye]
// undefined

// Here the whole function is printed because during memory creation phase whole function is 
// stored in memory, but variables are initialised when code execution phase occurs

// Step by step execution:
// 1. Memory creation phase:
//    a. Memory is allocated for the variable 'y' and initialized with 'undefined'.
//    b. Memory is allocated for the function 'bye', and the entire function code is stored.
// 2. Code execution phase:
//    a. console.log(bye) is executed. Since 'bye' was hoisted, it prints the function definition.
//    b. console.log(y) is executed. Since 'y' was hoisted but not yet assigned a value, it prints 'undefined'.
//    c. The variable 'y' is assigned the value 10.
