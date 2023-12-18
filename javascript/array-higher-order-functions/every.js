// .every() checks if all the elements passes a test
// will return true if yes otherwise returns false

let ages = [ 2, 4, 5, 8, 44 ];

let allEven = ages.every(ages => ages * 2 === 0);
console.log(allEven); // false

let greater = ages.every(ages => ages > 1);
console.log(greater); // true