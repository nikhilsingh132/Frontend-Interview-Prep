// Example:

var a = 10;

if (true) {
    var a = 20;
    console.log(a);
}
console.log(a);

// Output:
// 20
// 20

// Here 'a' is stored in global memory and can be accessed outside the block, 
// and shadowed by 'a' in block


/*--------------------------------------------------------------------------------------*/

// Example:

let b = 10;

if (true) {
    let b = 20;
    console.log(b);
}
console.log(b);

// Output:
// 20
// 10

// Here 'b' is stored in separate memory space and can be accessed outside the block, 
// As 'let' and 'const' is block scoped that's why value of 'b' is different
// Here also 'b' is shadowed by 'b' in block so that it's value is different in 
// block and global scope