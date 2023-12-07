for (let count = 1; count <= 100; count++) {
    if (count % 15 === 0) {
        console.log("fizzbuzz");
    }    
    else if (count % 5 === 0) {
        console.log("Fizz");
    }
    else if (count % 3 === 0) {
        console.log("buzz");
    }
    else {
        console.log(count);
    }
}