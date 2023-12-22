// module object is built in every javaScript file
// console.log(module);
let age = 7;
let name = "Alice";

console.log('ran my-math.js file');

/*
module.exports.hello = "Hello World!";
module.exports.add = (a, b) => a + b;
module.exports.name = name;
*/

// shortcut without the module.
exports.hello = "Hello World!";
exports.add = (a, b) => a + b;
exports.name = name;