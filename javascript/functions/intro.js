console.log("Hi, Aaron");

let sayHi = function(name) {
    console.log("Hi, " + name);
}

// call a function
sayHi("Aaron");
sayHi("Jane");
sayHi("Alice");

let add = function(a,b) {
    console.log(a+b);
}

// call a fucntion with multiple parameters
add(10, 15);
add(5, 15);

// javascript does not check the number of parameters
// or the data type of the parameters

let largest = Math.max(3, 5, 10, 3);

console.log(largest);


// create a function that returns a value
let multiply = function(a, b) {
    let product = a * b;
    return product;
}

console.log(multiply(3, 5));


let isEqual = function(a, b) {
    let same = a === b;
    return same;
}

console.log(isEqual("cat", "cat"));