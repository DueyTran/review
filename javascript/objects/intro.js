let array  = [];
let string = "";
let object = {}; // empty object

let myCar = {
    make: "Toyota",
    model: "Camry",
    wheels: 4
}

// dot-notation
console.log(myCar.make); // "Toyota"

myCar.color = "red";

// square bracket notation
console.log(myCar["color"]); // red

console.log(myCar);

let person = {
    name: "Bob",
    age: 45,
    likes: ["fishing", "gardening"],
    children: [
        { name: "Alice", age: 8},
        { name: "Charlie", age: 5}
    ]
}

console.log(person.likes[0]); // fishing

person.likes.push("programming");
console.log(person.likes) // [ 'fishing', 'gardening', 'programming' ]

console.log(person.children[1].name) // Charlie

// JavaScript Object Notation or commonly known as JSON
// in JavaScript arrays are objects
// they are objects wtih a length property
// and they have property names that are numbers


// let colors = ["red", "white", "blue"];
let colors = {
    length: 3,
    0: "red",
    1: "white",
    2: "blue"
}

