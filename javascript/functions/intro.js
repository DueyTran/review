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


let divide = (a, b) => {
    return a / b;
}

console.log(divide(15,3));


// named functions
// named functions are hoisted and can be access from anywhere
function divider(numerator, demoninator) {
    return numerator / demoninator;
}

console.log(divider(100, 25));


// function getAverage(nums) {
//     let average;
//     total = 0;
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i];
//     }
//     average = total / nums.length;
        
//     return average;
// }
        
// console.log(getAverage(nums));
              
        
let nums = [5, 5, 5, 10];


function getTotal(nums) {
    total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    return total;
}

// DRY don't repeat yourself

function getAverage(nums) {
    let average = getTotal(nums) / nums.length;
    return average;
}

console.log(getAverage([5, 2, 390, 106, 100, 1000]));
console.log(getAverage([5, 2, 25, 100, 1000]));
console.log(getAverage([5, 2, 10, 100]));


// default parameters
function adder(a, b = 0) {
    return a + b;
}

console.log(adder(2));
console.log(adder(5, 2));


function countChar(word, char) { 
    let numBs = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {            
            numBs++;
            
        }           
    }

    return numBs;   
}

function countBs(word) {
    return countChar(word, "B");
}

console.log(countChar("BbbkkkkBBkbB", "K"));
console.log(countBs("BBbbbBB"));
