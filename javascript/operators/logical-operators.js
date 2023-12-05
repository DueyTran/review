// logical operators  - operators that work with booleans (true, fasle)
let isLoggedIn =  true;
let isAdmin = false;

// AND (&&) Both operands needs to be true to resolve to true, otherwise, it resolves to false.
let seeSuperSecretStuff = isLoggedIn && isAdmin; // false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR || 
// OR evaluates to true if either operand is true. It only evaluates to false if both are false
let isSuperAdmin = false;
let isRegularUser = true;

let seeMundaneStuff = isSuperAdmin || isRegularUser; // true

console.log(true && true); // true
console.log(true && false); // true
console.log(false && true); // true
console.log(false && false); // false

console.log(true || (false && true)); // true
console.log((true || false) && true); // true
// AND operator takes precedence over OR
console.log(true || false && true || false && true && false); // true

// NOT operator !
let isRed = true;
console.log(isRed); // true
console.log(!isRed); // false