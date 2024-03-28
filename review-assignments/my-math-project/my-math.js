function add(a, b) {
    return a  + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return  a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function power(base, exponet) {
    return Math.pow(base, exponet);
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power,
}