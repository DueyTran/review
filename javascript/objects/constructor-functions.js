function Dog(name, weight, height) {
    this.name  = name;
    this.weight = weight;
    this.height = height;

  
}

Dog.prototype.bark = function() {
    if (this.weight > 10) {
        console.log("WOOF WOOF!!!")
    }
    else {
        console.log("yip yip yip!!!")
    }
}

let chihuahua = new Dog('Taco', 6); //  { name: "Taco", weight: 6 }
let rottweiller = new Dog('Killer', 70);
let poodle = new Dog('Fluffy', null, 24);



console.log(chihuahua); //Dog { name: 'Taco', weight: 6 }
console.log(rottweiller); // Dog { name: 'Killer', weight: 70 }

chihuahua.bark()
rottweiller.bark()

let hasWeightProp = chihuahua.hasOwnProperty('weight')
console.log(hasWeightProp);