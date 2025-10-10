// Example:
// console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

// In the example above, the temporal dead zone for 'x' is from the start of the scope until 'let x = 10;' is executed.

//memory creation phase
// In the memory creation phase, the JavaScript engine allocates memory for variables and functions.
// For 'var', variables are initialized with 'undefined'. For functions, the entire function definition is stored.

var n = 2;

function square(n) {
  var ans = n * n;
  return ans;
}

var x_val = square(n);
var y_val = square(4);

/*
 * Memory Creation Phase (Global Scope):
 * 1. Line 5: Memory is allocated for the variable 'n', and it's initialized with 'undefined'.
 * 2. Line 7: Memory is allocated for the function 'square', and the entire function code is stored.
 * 3. Line 12: Memory is allocated for the variable 'x_val', and it's initialized with 'undefined'.
 * 4. Line 13: Memory is allocated for the variable 'y_val', and it's initialized with 'undefined'.
 */

/*
 * Code Execution Phase (Global Scope):
 * 1. Line 5: 'n' is assigned the value 2.
 * 2. Line 12: The 'square' function is called with 'n' (which is 2).
 *    a. A new execution context is created for the 'square' function.
 *    b. Memory Creation Phase (for square(2)):
 *       i. Memory is allocated for the parameter 'n' and initialized with 2.
 *       ii. Memory is allocated for the variable 'ans' and initialized with 'undefined'.
 *    c. Code Execution Phase (for square(2)):
 *       i. Line 8: 'ans' is calculated as 2 * 2 = 4.
 *       ii. Line 9: The value of 'ans' (4) is returned.
 *    d. The returned value (4) is assigned to 'x_val'.
 * 3. Line 13: The 'square' function is called with 4.
 *    a. A new execution context is created.
 *    b. Memory Creation Phase (for square(4)):
 *       i. Memory is allocated for 'n' and initialized with 4.
 *       ii. Memory is allocated for 'ans' and initialized with 'undefined'.
 *    c. Code Execution Phase (for square(4)):
 *       i. Line 8: 'ans' is calculated as 4 * 4 = 16.
 *       ii. Line 9: The value of 'ans' (16) is returned.
 *    d. The returned value (16) is assigned to 'y_val'.
 */
