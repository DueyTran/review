const myMath = require('./my-math');
const colors = require('ansi-colors');
const http = require('http');

const server = http.createServer(
    (req, res) => {
        res.write(myMath.add(3, 4).toString());
        res.end()
    }
)

server.listen(3000)

console.log(colors.bgGreen(myMath.add(3, 4)));
console.log(colors.cyan(myMath.subtract(3, 4)));
console.log(colors.white(myMath.multiply(3, 4)));
console.log(colors.gray(myMath.divide(9, 3)));
console.log(colors.blue(myMath.modulo(3, 2)));
console.log(colors.magenta(myMath.power(3, 2)));
console.log(colors.red("hello"));