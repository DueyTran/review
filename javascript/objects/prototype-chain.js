// prototype chain

class Animal {
    constructor() {

    }
    // makeNoise() is the interface that other classes cacn use
    makeNoise() {
        console.log("The animal makes a sound");
    }
}

class Pig extends Animal {
    constructor() {
        super(); // super calls  the constructor function of whichever class it extends to. this case, Animal
    }

    makeNoise() {
        console.log("The pig says: oink oink");
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    makeNoise() {
        console.log("The dog says: woof woof");
    }
}

let myAnimal = new Animal();
let babe = new Pig();
let fido = new Dog();


myAnimal.makeNoise();
babe.makeNoise();
fido.makeNoise();

