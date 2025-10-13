// Example:

let p = 10;
var q = 20;
console.log(window.p);
console.log(window.q);

// Output:
// undefined
// 20

// In this 'q' (which is var) is attached to 'window' object because it is stored in global
// memory and 'p' (which is let) is not attached to 'window' object because it is stored in
// separate memory space

// 'Window' object is the global object in the browser environment
