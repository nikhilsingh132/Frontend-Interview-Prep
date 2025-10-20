// Definitions:

// Scope:
// Scope is the region of the code where a variable or function is accessible.

// Type of Scope:

// 1. Global Scope: Variables and functions declared in the global scope are accessible
// from anywhere in your code.
// 2. Function Scope: Variables declared with var inside a function are only accessible
// within that function.
// 3. Block Scope: Introduced with let and const, block scope means variables
// declared within a code block (e.g., if statements, for loops, or simply curly braces)
// are only accessible within that block.
// 4. Module Scope: When using JavaScript modules, variables declared at the top level
// of a module are scoped to that module and are not globally accessible unless explicitly
// exported.

/*-----------------------------------------------------------------------------------*/

// Lexical Environment:
// Lexical Environment is the environment in which a variable or function is declared.
// Lexical environment is the local memory along with lexical environment of its parent.

// Lexical Environment = local memory + lexical environment of its parent

/*-----------------------------------------------------------------------------------*/

// Scope Chain:
// Scope chain is the chain of lexical environments that are used to resolve variable
// and function references.

// Scope chain = lexical environment of current execution context + lexical environment of 
// parent execution context
