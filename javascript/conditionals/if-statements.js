// conditon will execute the code within the curly braces if it evaluates to true
let isAdmin = true;

if (isAdmin) {
    // code block (code within the curly braces)
    console.log("Welcome Admin!");
}

console.log("End of script");


let a = 5;
let b = 5;

if (a === b) {
    console.log("I ran!");
}

console.log("End!");

let isLoggedIn = true;
let isSuperUser = false;

if (isLoggedIn && isSuperUser) {
    console.log("SECRETS");
}
// else is a catch all without any conditionals
else { 
    console.log("UNAUTHORIZED");
}

// let username = "browndog";
let username = "orangecat";

if (username === "blackcat") {
    console.log("blackcat");
}
// else if has conditionals
else if (username === "redcat") {
    console.log("redcat");
}
else if (username === "orangecat") {
    console.log("orangecat 1");
}
else if (username === "orangecat") {
    console.log("orangecat 2");
}
else {
    console.log("Username not found!");
}

let y = 555;
let x = 100;

if (y > x)  {
    console.log(y)
}
else {
    console.log(x)
}


let i = 5;

if (i === 5) {
    console.log("i is 5");
}
else {
    console.log("i is not 5");
}

// ternary operator
i === 5 ? console.log("i is 5") : console.log("i is not 5");

// i === 5 is the condition. if condition is true, returns what is on the left. 
//if condition is false, returns what's on the right.
let z = i === 5 ? 5 : 0;
console.log(z) // 5

