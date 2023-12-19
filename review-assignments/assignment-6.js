function midThree(ints) {
    let start = ints.length / 2 - 1;
    let end = ints.length / 2 + 2;
    return ints.slice(start, end);
}

console.log(midThree([1, 2, 3, 4, 5]));
console.log(midThree([1, 2, 3, 4, 5, 7, 9, 11, 13]));
console.log(midThree([1, 2, 3, 4, 5, 13, 5, 9, 11, 100, 15]));

function allLowerCase(word) {
    return word.map(word => word.toLowerCase())
}

console.log(allLowerCase(["HELLO", "WORD"]));
console.log(allLowerCase(["HeLLo", "WoRd"]));


function fizzBuzzArray(nums) {
    return nums.map(num => {
        if (num % 15 === 0) {
            return "fizzbuzz";
        }
        else if (num % 3 === 0) {
            return "fizz"
        }
        else if (num % 5 === 0) {
            return "buzz"
        }
        else {
            return num;
        }
    })
}

console.log(fizzBuzzArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]));

function getShortest(str, num) {
    return str.filter(str => str.length <= num);
}

console.log(getShortest(["a", "ab", "abc", "abcd"], 2));

