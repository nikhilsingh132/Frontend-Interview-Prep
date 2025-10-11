// Example:  (Example of hoisting)

console.log(y);
console.log(bye);

var y = 10;

const bye = () => {
  console.log("bye");
};

// Output:

// undefined
// Uncaught ReferenceError: bye is not defined

// This occured because when we use arrow function instead of normal function then it 
// it works like variable where value is assignd to it.