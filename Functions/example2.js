// Example: First class functions

// Part 1: Be assigned to variables

const sayHello = function () {
  console.log("Hello!");
};
sayHello();

// Outputs: Hello!

/*-----------------------------------------------------------------------------------*/

// Part 2: Be passed as arguments to other functions

function greet(name, callback) {
  console.log("Hi, " + name + "!");
  callback();
}
greet("Alice", function () {
  console.log("Welcome!");
});
// Outputs:
// Hi, Alice!
// Welcome!

/*-----------------------------------------------------------------------------------*/

// Part 3: Be returned as values from other functions:

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(5));

// Outputs: 10

/*-----------------------------------------------------------------------------------*/

// Part 4: Be stored in data structures

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
console.log(operations.add(10, 5));

// Outputs: 15
