let dog = {}; // create an object using an object literal

dog = new Object(); // create an abject using built-it Object class

class Dog {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    bark() {
        console.log(this.name + " goes woof woof");
    }
}

class SmallDog extends Dog {
    constructor(name, weight) {
        super(name, weight);
    }
    bark() {
        console.log(this.name + " goes yip yip yip");
    }
}

class Person {
    constructor(name, pet) {
        this.name = name;
        this.pet = pet;
    }
}

let fluffy = new Dog("Fluffy", 7); // create a dog object use the Dog class
console.log(fluffy);
fluffy.bark();

let sparkles = new SmallDog('Sparkles', 4);
sparkles.bark();
console.log(sparkles)

let bob = new Person("Bob", sparkles);
console.log(bob);
bob.pet.bark();

class Polygon {
    constructor(nums) {
        this.nums = nums;
    }
    perimeter() {
        let perimeter = 0;
        for (let num of this.nums) {
            perimeter += num
        }
        return perimeter;
    }
}


let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());


class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    area() {
        return this.w * this.h;
    }
}

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

let rec = new Rectangle(3, 4);
rec.area();

let sqr = new Square(3);
console.log(sqr.area());