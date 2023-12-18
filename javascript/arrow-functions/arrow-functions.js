// arrow functions are functions using shorter syntax

/*

let double = function(num) {
    return num * 2;
}

1. Remove the function keyword and replace it with an =>

let double = (num) => {
    return num * 2;
}

2. If you have one parameter, you can remove parenthesis

let double = num => {
    return num * 2;
}

3. Remove curly braces for an implicite return

let double = num => num * 2;

*/



// named function
function sum(a, b) {
    return a + b;
}

// anonymous function
let sum1 = function(a, b) {
    return a + b;
}

// arrow function
let sum2 = (a, b) => a + b;


let makeCaps = word => word.toUpperCase();

console.log(makeCaps("arkansas")); // ARKANSAS

