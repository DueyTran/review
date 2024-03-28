const fs = require('fs').promises;

console.log("start code");
let readFilePromise = fs.readFile('./file-example.txt', "utf8");

// console.log(readFilePromise);

// readFilePromise.then(
//     (fileContents) => console.log(fileContents),
//     (error) => console.log(error),
// )

readFilePromise
.then(
    (fileContents) => {
        console.log(fileContents)
        return fs.writeFile("new-file.txt", fileContents);
    },
        
    (error) => console.log(error),
)
.then (
    () => {
        console.log("file written");
        return fs.appendFile("new-file.txt", "\nMore blahs")
    }
)
.then (
    () => {
        
        console.log("appened text successfully");
        return "WHOOOHOOO! Promises are awesome!";
    }
)
.then (
    (message) => {
        console.log(message);
    }
)
.then (
    () => {
        return fs.unlink("new-file.txt");
    }
)
.then (
    () => console.log("deleted new-file.txt")
)
console.log("end code");