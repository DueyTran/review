let fruits = ["apples", "avocados", "blueberries", "cherries", "cherries"];

// function filter(array) {
//     let newArray = [];

//     for (let element of array) {
//         if (element[0] === "a") {
//             newArray.push(element);
//         }
//     }

//     return newArray;
// }


// let filteredArray = filter(fruits);
// console.log(filteredArray);


// arrays have built in filter funtion
let aFruits = fruits.filter(function(fruit) { return fruit[0] === "a" });
console.log(aFruits);


function bFruits(fruit) {
    return fruit[0] === "b";
}

let result = fruits.filter(bFruits);
console.log(result);

let cFruits = fruits.filter(fruits => fruits[0] === "c");
console.log(cFruits);

let unique = fruits.filter((x, y) => fruits.indexOf(x) === y)
console.log(unique)

// .filter() returns a new  array with the elements that pass a specified test

let nums = [ 1, 2, 4, 6, 8, 10, 12, 13];

let greaterThanSeven = nums.filter(nums => nums > 7);
// let greaterThanSeven = nums.filter(function(nums) { return nums > 7 });
console.log(greaterThanSeven)