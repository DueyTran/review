let myCar = {
    make: "Toyota",
    model: "Camry",
    color: "white",
    doors: 4,
    wheels: 4,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            return "Vrooom!!!";
        }
        else {
            return "You need to start your car!";
        }
    }
}

myCar.start();
console.log(myCar.drive());

myCar.stop();
console.log(myCar.drive());


function bark() {
    if (this.weight > 10) {
        console.log("WOOF WOOF") 
    }
    else {
        console.log("yip yip yip") 
    }
}


let rottweiller = {
    weight: 70,
    bark // same as using bark: bark    as long as it's the same name
}

let chihuahua = {
    weight: 6,
    bark: bark
}


rottweiller.bark()
chihuahua.bark()


function run() {
    chihuahua.bark();
}