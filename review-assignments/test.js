let colors = ["blue", "red", "white", "red", "white", "green"];

let set = new Set(colors);
console.log(set);


let students = ['Bob', 'Jane', 'Joe', 'Alice', "John"];

for (let i = students.length -1; i >= 0; i--) {
    console.log(students[i]);
}

let newColors = ["red", "white", "blue"];

console.log(newColors[colors.length] = "pink");

function monkeyTrouble(aSmile, bSmile) {
//     // if (aSmile === true && bSmile === true || aSmile === false && bSmile === false) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
    return aSmile === bSmile;
}

// function monkeyTrouble(aSmile, bSmile) {
//     let result = aSmile === bSmile ? true : false
//     return result;
// }

console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(false, true));
console.log(monkeyTrouble(true, true));


