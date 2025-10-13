// Example:

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

// Output:
// 10
// 20
// 30
// 10
// Uncaught ReferenceError: b is not defined

// Here 'a' is stored in global memory and can be accessed outside the block
// Here 'b' and 'c' is stored in block memory space and cannot be accessed outside the block