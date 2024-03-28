// file system is built into node
const fs = require('fs');
const path = require('path');

const filePath = "new-file.txt"

// create new-file.txt
// add text "Mmm pancakes!!"
// .writeFileSync
fs.writeFileSync(filePath, "MmMM, pancakes!!"); // write a file
fs.appendFileSync(filePath, "\nDon't forget about waffles"); // change a file

let fileContents = fs.readFileSync(filePath, "utf8"); // read a file
console.log(fileContents)

fs.unlinkSync(filePath); // delete a file