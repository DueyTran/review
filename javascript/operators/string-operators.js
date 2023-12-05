let firstName = "Aaron"; // double quotes
let lastNmae = 'Robinson'; // single quotes
let fullName = `Aaron Robinson`; // backticks

let houseNumber = "123";
let streetName = "Main St.";

// concatenation operator
let address = houseNumber + " " +  streetName; // "123 Main St."

// inject values into a string template literal
address = `${houseNumber} ${streetName}`; // "123 Main St."
console.log(address);

// string template literals
address = "123 Main St.\nRogers, AR 72756" // adding a new line with \n
console.log(address);

address = `123 Main St.
Rogers, AR 72756`;
console.log(address); // adding new line with backticks


// escaped characters
console.log("\t123 Main St.\n\tRogers, AR 72756"); // new line and \t tab


// combining strings and numbers
let age = 23;
let studentName = "Bob";

let ageName = age + studentName; // "23Bob"
console.log(ageName);

let result = 5 + 3 + "George"; // "8George"
result = 5 + 3 + "George" + 2 + 7; // "8George27"
console.log(result);

console.log("5" + 5); // 55
console.log(Number.parseInt("5") + 5); // 10

newResult = "Bob" / 5; // NaN not a number
console.log(newResult);

result = "5" / 5; // 1
console.log(result);

result = "5a" / 5; // NaN
console.log(result);