function firstLastEvens(nums) {
          
    if (nums[0] % 2 === 0 && nums[nums.length -1] % 2 === 0) {
        return true;
    }  

    else {
        return false;
    }     
}


console.log(firstLastEvens([3,2,1]))
console.log(firstLastEvens([4,2,1,5,6,8]))
console.log(firstLastEvens([10]))

function addMiddle(nums, insert) {
    let middle = nums.length / 2;
    nums.splice(middle, 0, insert);
    return nums;
}

console.log(addMiddle([1,2,3,4], 7));



let  colors = ["blue", "green", "red"]

for (let i = 0; i < colors.length; i++) {
    console.log(colors[colors.length - 1])
}