// .reduce() takes all of the elements in an array and boils it down to one element

let myNums = [ 2, 3, 4 ];

let accumulator = 0;

for (let num of myNums) {
    accumulator += num;
}

console.log(accumulator);

// calculate total using reduce
myNums.reduce((accumulator, currentElement) => accumulator + currentElement, 0);

/* 
accumulator = 0, currentElement = 2
accumulator = 2, currentElement = 3
accumulator = 5, currentElement = 4
returns 5 + 4
*/


let fruits = [ "apple", "banana", "cherry" ];

let combined = fruits.reduce((accumulator, fruit) => accumulator + fruit,  "");
console.log(combined);

/*
accumulator = "", fruit = "apple"
accumulator = "apple", fruit = "banana"
accumulator = "applebanana", fruit =  "cherry"
accumulator = "applebananacherry", return
*/


let randomNums = [ 4, 10, 5, 7];

let max = randomNums.reduce((accumulator, currentElement) => currentElement > accumulator ? currentElement : accumulator, Number.NEGATIVE_INFINITY);
console.log(max)