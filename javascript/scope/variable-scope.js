// name is on the global scope
let name = "Charles";

// variables are either block or function scoped
// let is block and function scoped
function myFunc() {
    // access  closes varible with same name
    let name = "Aaron"
    let lastName = "Robinson";
    console.log(name);
    console.log(lastName);

    if (true) {
        // var is only function scoped
        var color = "blue";
    }
    console.log(color)
}

myFunc();


// pure functions
// same input will always result in the same output
function sayHello(firstName)  {
    console.log("Hi " + firstName);
}

let greeting = "Yo "
// rather having greeting outside of sayHelloUnPure, put it inside of the function to make it pure
function sayHelloUnPure(firstName) {
    // let gretting = "Yo "
    console.log(greeting + firstName);
}

sayHello("Alice");
sayHelloUnPure("Alice");
