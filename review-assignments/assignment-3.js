let values = [1, 3];
let has23;

if (values[0] === 2 || values[0] === 3) {
    has23 = true;
}
else if (values[1] === 2 || values[1] === 3) {
    has23 = true;    
}
else {
    console.log(false);
}

console.log(has23);

let arrayA = [1, 2, 5 , 4];
let arrayB = [7, 5, 4];
let commonEnd;

if (arrayA[arrayA.length -1] === arrayB[arrayB.length -1]) {
    console.log(commonEnd = true);
}
else {
    console.log(false);
}


// commonEnd = arrayA[arrayA.length -1] === arrayB[arrayB.length -1]
// console.log(commonEnd);
let nums = [2, 1, 2, 3,  4, 8, 14];
let countEvens = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        countEvens++;
    }
}
console.log(countEvens);


let numbers = [5, 5, 5, 10];
let total = 0;
let average;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    average = total / numbers.length;    
}

console.log(average)

let nums2 = [1, 4, 2, 1, 4, 4, 4];
let maxSpan = 0;

for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
        if (nums2[i] === nums2[j]) {
            let span = j - i;

            if (span > maxSpan) {
                maxSpan = span;
            }
        }
    }
}

console.log(maxSpan);