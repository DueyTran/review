let a = 7;
let b = 7;

// equality == 
let isEqual = a == b; // true
console.log(isEqual);
console.log(5 == 5); // true
console.log("5" == 5); //

// strict equality ===
console.log("5" === 5); // false
console.log("bob" === "bob"); // true
console.log("bob" === "Bob"); // false
console.log("bob".toLowerCase() === "BOB".toLowerCase()); // true

// not equal !=
console.log(5 != 5); // false
console.log(5 != 7); // true
console.log(5 != "5"); // false

// strict inequality !==
console.log(5 !== "5"); // true

// greater than, less than
console.log(5 > 3); // true
console.log(5 < 3); // false

let bobAge = 40;
let sallyAge = 30;

let isSallyOlder = sallyAge > bobAge; // false

// greater than or equal to >= , less than or equal to <=
console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 <= 3); // false
console.log(5 <= 5); // true

// the letters that are further down the alphabet is more value
console.log("Z" > "A"); // true
// lowercase letters have more value than uppercase
console.log("a" > "A"); 
// JS does compare letter to letter
console.log("apple" > "banana"); // false