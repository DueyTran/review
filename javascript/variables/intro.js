let fullName; // declaring a variable
fullName = "Duey Tran"; // assigning a value to a variable

let height; // declared a variable
height = 5.5; // assigned a value to a variable

let isBlue; // variables with multiple words use camel case
isBlue = true;

let university = "University of Arkansas"; // declaring and assigning on same line

// What are the valid variable characters???
// Variable names can begin with $ and _
// All other alphabetical characters are allowed
let $total = 0;
let _private = "secret key";

// Always remember to ask yourself what data type of the variable
// JavaScript data types are inferred from their values
// JavaScript is dynamically typed
let pi = 3.14; // pi is a number
console.log(typeof(pi)); // "number"

let state = "Arkansas"; // data type of the variable state is a string
state = "California"; // reassign a value to a variable
state = true; // avoid assigning a different data type to the same variable name

console.log(fullName);
console.log(height);
console.log(isBlue);
console.log(university);

// Undefined
let animal; // declare a variable
// What is the value of animal before we assign it a value?
console.log(animal); // undefined

// null
let cherLastName = null; // a variable that is explicitly nothing

// What if we don't want a variable's value to change??
// Use const instead of let
// When using const, use all uppercase when declaring
const SECRET_KEY = "abc123"; // use underscores to seperate words in a const

