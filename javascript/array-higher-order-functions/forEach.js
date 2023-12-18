// .forEach() calls a function on every element but does NOT return a value

let states = [ "Maine", "Maryland", "Arkansas"];
states.forEach(state => console.log(state));


let count = 0;
states.forEach(state => count++);
console.log(count);