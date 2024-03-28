const fs = require('fs');

function createFile(filePath, content) {
    fs.writeFileSync(filePath, content);
    return content;
}

function readFile(filePath) {
    return fs.readFileSync(filePath, "utf8");
   

}

function appendFile(filePath, content) {
    fs.appendFileSync(filePath, content);
    return readFile(filePath);
    
}

function deleteFile(filePath) {
    fs.unlinkSync(filePath);
    return "File deleted.";
}

module.exports = {
    createFile,
    readFile,
    appendFile,
    deleteFile,
}