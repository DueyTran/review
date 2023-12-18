// .find() will find the first element that passes a specified test
// and returns a single element

let names = [ "amanda", "bob", "kathy" ];

let startsB = names.find(name => name[0] === "b");
console.log(startsB); // bob