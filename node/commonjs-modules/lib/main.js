const MyMath = require('./my-math');
const Rectangle = require('./Rectangle');
// main.js is my entry point to javaScript files
// my-math.js is the module I import into my main.js file

console.log(MyMath.hello);
console.log(MyMath.add(2, 3)); // 5
console.log(MyMath.name);

const rectangle1 = new Rectangle(2, 4);
console.log(rectangle1.getArea())