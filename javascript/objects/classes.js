class Dog {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    bark() {
        if (this.weight > 10) {
            console.log("WOOF WOOF!!!")
        }
        else {
            console.log("yip yip yip!!!")
        }    
    }
}

console.log(Dog.prototype.bark);

let chihuahua = new Dog('Taco', 6, null); //  { name: "Taco", weight: 6 }
let rottweiller = new Dog('Killer', 70, null);
let poodle = new Dog('Fluffy', null, 24);

console.log(chihuahua);
console.log(rottweiller);
console.log(poodle);