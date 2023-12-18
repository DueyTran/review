// .some() returns true if any element passes a specified test

let ages = [ 2, 4, 5, 8, 44 ];

let isOneEven = ages.some(age => age % 2 === 0);
console.log(isOneEven); // true