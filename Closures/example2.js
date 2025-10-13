// Example:

function x() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

x();

// Output:
// 3
// 3
// 3

// Here 'i' is stored in global memory and can be accessed outside the block
// So when setTimeout is called it will look for 'i' in global memory and find it
// But the value of 'i' will be 3 because the loop has already finished executing
// So it will print 3 for all the setTimeout calls
// Settimeout calls are printed each after 1 second but the value of 'i' is 3

/*------------------------------------------------------------------------------------*/

// Example:

function y() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

y();

// Output:
// 0
// 1
// 2

// Here 'i' is stored in separate memory space and can be accessed outside the block
// So when setTimeout is called it will look for 'i' in separate memory space and find it
// So it will print 0, 1, 2 for all the setTimeout calls
// as 'let' is block scoped so it will create a new reference each time when loop runs

/*------------------------------------------------------------------------------------*/

// Example:

//We can use var in for loop to create output just like let by doing like this:

function z() {
  for (var i = 0; i < 3; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

z();

// Output:
// 0
// 1
// 2

// Here 'i' is stored in global memory and can be accessed outside the block
// but when it is passed to "close" function it will create a new reference each
// time when loop runs and this reference will be stored in separate memory space
