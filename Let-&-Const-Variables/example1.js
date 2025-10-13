// Example: Works

console.log(x);
var x = 20;

// Output:
// undefined

// Here 'x' is hoisted, so x will be undefined because it is stored in global memory

/*----------------------------------------------------------------------------------------*/

// Example: Does not work

console.log(a);
let a = 10;

// Output:
// ReferenceError: Cannot access 'a' before initialization

// Here 'a' is hoisted but not stored in global memory and present in separate memory space
// 'a' is stored in separate memory space with "undefined" value until code execution phase
// 'a' was in temporal dead zone (TDZ) before code execution phase so it cannot be accessed
