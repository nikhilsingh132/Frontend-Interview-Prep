//Definition:

// Callback hell, also known as the "Pyramid of Doom," is a phenomenon in JavaScript that 
// occurs when multiple asynchronous operations are handled using deeply nested callback 
// functions. This nesting makes the code difficult to read, understand, and maintain, 
// resembling a pyramid shape due to the increasing indentation levels.


// Key characteristics of callback hell:

// 1. Deeply Nested Callbacks: Functions are called inside the success or failure callbacks of 
// other asynchronous functions, leading to multiple levels of indentation.
// 2. Reduced Readability: The complex structure makes it challenging to follow the flow of 
// execution and understand the program's logic.
// 3. Difficulty in Error Handling: Managing errors across multiple nested callbacks can become 
// cumbersome and error-prone.
// 4. Maintenance Challenges: Modifying or adding new functionality to such code can be difficult 
// and may introduce bugs.