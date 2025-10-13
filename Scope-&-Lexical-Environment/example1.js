// Example:
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();
console.log(a);

// c() is lexically inside a() and a() is lexically inside global scope
// Memory execution of c() will have local memory of c() and reference to global memory of a()
// Memory execution of a() will have local memory of a() and reference to global memory of global scope

// When console.log(b) is executed then it will look for b in its local memory of c() and if not found then 
// it will look for b in its parent memory of a() and if not found then it will look for b in its parent 
// memory of global scope this is called scope chain
