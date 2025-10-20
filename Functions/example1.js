// Example: Function statement vs Function expression

a();
b();

function a() {
  console.log("a");
}

var b = function () {
  console.log("b");
};

// Output:
// a
// Uncaught TypeError: b is not a function

// Here 'a' is stored in global memory and can be accessed outside the block
// Here 'b' is initially stored with undefined value so it cannot be accessed

/*-----------------------------------------------------------------------------------*/

// Example: Anonymous function

// function () {
//   console.log("anonymous function");  // this will create error that's why I am commenting this out
// }

// Output:
// Uncaught SyntaxError: Function statements require a function name

/*-----------------------------------------------------------------------------------*/

// Example: Named function expression

var c = function named() {
  console.log("c");
};

c();
named();

// Output:
// c
// Uncaught ReferenceError: named is not defined

// 'named' gives error because it is stored in local memory of function 'c' and not in 
// global memory so it cannot be accessed outside the block

/*-----------------------------------------------------------------------------------*/

