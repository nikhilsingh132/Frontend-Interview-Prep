// Example:

var a = 10;
var a = 100;
console.log(a);

// Output:
// 100

// Here 'a' is stored in global memory and can be redeclared as it is var

/*-----------------------------------------------------------------------------------*/

// Example:

let b = 10;
// let b = 100;  // commented out this line to avoid error
console.log(b);

// Output:
// Uncaught SyntaxError: Identifier 'b' has already been declared

// Here 'b' is stored in separate memory space and cannot be redeclared as it is let
