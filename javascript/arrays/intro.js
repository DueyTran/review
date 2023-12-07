let student1  = "Bob";
let student2 = "Jane";
let student3 = "John";

console.log(student1);
console.log(student2);
console.log(student3);

// assign each elementt
let students = [];
students[0] = "Bob";
students[1] = "Jane";
students[2] = "John";

// declare an array with values immediately
students = ["Bob", "Jane", "John"];

// arrays is 0 base. starts at 0 ,1 ,2 ...
console.log(students[1]); // "Jane"
console.log(students);

console.log(students.length); // number of elements in the array. will return 3 in this case


for (let i = 0; i <= students.length -1; i++) {
    console.log(students[i]);    
}

let colors = ["Red", "White", "Blue"];
console.log(colors[2]);

let blue = colors[2]; // "blue"

let ages = [20, 30 , 40, 50];

let total = 0

for (let i = 0; i < ages.length; i++) {
    total = total + ages[i];
    console.log(total);
}

let average = total / ages.length;
console.log(average);

let fruits = [];
fruits.push("strawberry");
fruits.push("banana");
fruits.push("mango", "apple");
console.log(fruits);
// .push adds to the end of the array

let poppedElement = fruits.pop(); // "blueberry"
// .pop removes the last element in the array

console.log(fruits.pop());