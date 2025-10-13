// Example: Syntax Error

let a = 10;
// let a = 100; // commented out this line to avoid error but if it is present then it will throw error
console.log(a);

// Output:
// Uncaught SyntaxError: Identifier 'a' has already been declared

/*-----------------------------------------------------------------------------------*/

// Example: Reference Error

console.log(b);
let b = 10;

// Output:
// Uncaught ReferenceError: Cannot access 'b' before initialization as 'b' is in temporal dead zone (TDZ)

/*-----------------------------------------------------------------------------------*/

// Example: TypeError

const c = 10;
c = 20;
console.log(c);

// Output:
// Uncaught TypeError: Assignment to constant variable.
