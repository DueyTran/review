const fileIO = require('./file-io.js');
const http = require('http');

const path = "new-file.txt"

fileIO.createFile(path, "Hello");
console.log(fileIO.readFile(path));
let updateContent = fileIO.appendFile(path, "\nNew line");
console.log(updateContent);
let deletedFile = fileIO.deleteFile(path);
console.log(deletedFile);

const server = http.createServer((req, res) => {
    let content = fileIO.readFile('index.html')
    res.write(content);
    res.end();
});

server.listen(3000);
console.log("Server is now listening");