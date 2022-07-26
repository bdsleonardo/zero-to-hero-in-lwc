// Equality comparison
// normal comparison
// strict comparison

// 1. Normal comparison (==) || only compare value
console.log(3==3);
console.log("Leonardo" == "Leonardo");

// 2. strict comparision (===)
// compare value + data type
console.log(3==="3"); // return false
console.log(3===3); // return true

// null vs undefined
var x = undefined;
console.log(x);

var y = null;
console.log(y);

console.log(x === y);