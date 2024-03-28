// path library is built into node
const path = require('path');

const fullPath = path.resolve('.');
const parentFullPath = path.resolve('..');
console.log(fullPath);
console.log(parentFullPath);

const myPath = "~/my-files/scripts.js"
console.log(path.basename(myPath));
console.log(path.dirname(myPath));

// __dirname gives you the directory of your current file
console.log(__dirname);

// __filename gives you the full path and the file name
console.log(__filename);