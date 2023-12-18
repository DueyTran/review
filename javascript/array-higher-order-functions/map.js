// .map() returns a new array by changes each element in the original array

let nums = [ 1, 2, 4, 6, 8, 10, 12, 13 ];

/*
function double(num) {
    return num * 2;
}

result = nums.map(double);
*/

result = nums.map(nums => nums * 2);
console.log(result);

secondResult = nums.map(function(nums) { return nums * 2});
console.log(secondResult)

