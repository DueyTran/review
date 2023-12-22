class Shape {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return undefined;
    }
}


class Rectangle extends Shape {
    constructor(w, h) {
        super(w, h);
    }
    getArea() {
        return this.w * this.h;
    }
}

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

class Circle extends Shape {
    constructor(w) {
        super(w, w);
    }
    getArea() {
        const radius = this.w / 2; 
        return Math.PI * radius ** 2;      

    }
}