// Example

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 2;
  console.log(x);
}

function b() {
  var x = 3;
  console.log(x);
}

/*
Output:
2
3
1
*/

/*
Step-by-step execution based on Call Stack and Execution Context:

1. Global Execution Context (GEC) Creation:
   - The GEC is created and pushed to the bottom of the call stack.
   - Memory Creation Phase (Global):
     - `var x`: Memory is allocated, initialized to `undefined`.
     - `function a`: Memory is allocated, and the entire function definition is stored.
     - `function b`: Memory is allocated, and the entire function definition is stored.
   - Code Execution Phase (Global):
     - `x = 1;`: The value 1 is assigned to the global variable `x`.

2. Function `a()` Execution:
   - `a()` is called.
   - A new Function Execution Context (FEC) for `a` is created and pushed onto the call stack.
   - Memory Creation Phase (for `a`):
     - `var x`: A new, local variable `x` is created in `a`'s scope, initialized to `undefined`.
   - Code Execution Phase (for `a`):
     - `x = 2;`: The value 2 is assigned to the local `x`.
     - `console.log(x);`: Looks for `x` in its local scope, finds 2, and prints `2` to the console.
   - The `a()` function finishes, and its FEC is popped from the call stack.

3. Function `b()` Execution:
   - `b()` is called.
   - A new FEC for `b` is created and pushed onto the call stack.
   - Memory Creation Phase (for `b`):
     - `var x`: A *new*, local variable `x` is created in `b`'s scope, initialized to `undefined`.
   - Code Execution Phase (for `b`):
     - `x = 3;`: The value 3 is assigned to the *local* `x`.
     - `console.log(x);`: Looks for `x` in its local scope, finds 3, and prints `3` to the console.
   - The `b()` function finishes, and its FEC is popped from the call stack.

4. Final Global Execution:
   - The control returns to the GEC.
   - `console.log(x);`: Looks for `x` in the global scope, finds 1, and prints `1` to the console.

5. End of Program:
   - The GEC is popped from the call stack, and the program finishes.
*/
