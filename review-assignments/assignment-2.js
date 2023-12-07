let inputA = 0;

if (inputA >= 0) {
    console.log("Number is positive");
}
else if (inputA <= 0) {
    console.log("Number is negative");    
}
else {
    coneole.log("Number is 0");
}


let inputB1 = 55;
let inputB2 = 300;
let inputB3 = 600;

if (inputB1 >= inputB2 && inputB1 >= inputB3) {
    console.log(inputB1);
}
else if (inputB2 >= inputB1 && inputB2 >= inputB3) {
    console.log(inputB2);
}
/* 
else if (inputB3 >= inputB1 && inputB3 >= inputB2) {
    console.log(inputB3);
} 
*/
else {
    console.log(inputB3);
}


let year = 2020;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("leap year");
}
else {
    console.log("not a leap year");
}


let degreesCelsius = 100;

// let fehrenheit = (degreesCelsius - 32) * 5 / 9;
// console.log(fehrenheit);

function degreesFehrenheit() {
    let fahrenheit =  (degreesCelsius * (9 / 5)) + 32
    return fahrenheit;
}

console.log(degreesFehrenheit())