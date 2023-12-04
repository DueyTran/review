// addition
let sum = 5 + 7; // 12
let a = 5;
let b = 7;
sum = a + b;
console.log(sum);

// subtraction
let difference = 12 - 5;
console.log(difference);

// multiplication 
let product = 3 * 7;
console.log(product);

// division
let quotient = 15 / 3;
console.log(quotient);

quotient = 10 / 3;
console.log(quotient);

// remainder (modulo)
let remainder = 10 % 3; // 1
remainder = 15 % 3; // 0
remainder = 15 % 4; // 3
remainder = 5 % 2; // 1
console.log(remainder);

// exponent
let square = 2 ** 2; // 4

// exponent using the built-in Math library
square = Math.pow(2, 2); // 4

let squareRoot = Math.sqrt(4);
console.log(squareRoot);


// increment
let count = 1;
count = count + 1; // 1 + 1
count = count + 1; // 2 + 1
// could also use ++ 
count++;
console.log(count);

// decrement (go down by 1)
let countdown = 10;
countdown--;
countdown--;
countdown--;
console.log(countdown);

// combining operators
let result = 4 + 3 * 5; // 19
console.log(result);

result = (4 + 3) * 5; // 35

// Math. library
let greatest = Math.max(3, 5, 8, 500, 2, 1);
console.log(greatest);

let least = Math.min(3, 5, 8, 500, 2, 1);
console.log(least);

console.log(Math.PI);

let radius = 5;
let area = Math.PI * radius ** 2;
console.log(area);

// assignment operators
let x = 10;
x = x + 2; // 12
x += 2; // 14

x -= 4; // 10

// *= , /= , **=
x *= 10; // 100
x /= 2; // 50
x **= 2; // 2500
console.log(x);

// Number. library
console.log(Number.POSITIVE_INFINITY);
console.log(Math.max(3, 5, Number.POSITIVE_INFINITY, 10));
