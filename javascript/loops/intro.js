let count = 1;

// while loop
while (count <= 10) {
    console.log(count);
    count++;
}

console.log("End of script");

// for loop
// syntax - for (variable assignment; condition; change variable)
for (let count = 1; count <= 10; count++) {
    console.log(count);
}

for (let count = 10; count >= 0; count--) {
    console.log(count);
}

                                           // triangle += "#" also works 
for (let triangle = "#"; triangle.length <= 7; triangle = triangle + "#") {
    console.log(triangle);
}

