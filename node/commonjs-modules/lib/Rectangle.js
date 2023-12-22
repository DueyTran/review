const Shape = require('./Shape');

class Rectangle extends Shape {
    constructor(w, h) {
        super(w, h);
    }

    getArea() {
        return this.w * this.h;
    }
}

module.exports = Rectangle;