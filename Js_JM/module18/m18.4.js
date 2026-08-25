/**
 *^ topic of the array sort
 ** 1. sort()
 ** 2. ascending
 ** 3. descending
 */

const numbers = [6, 5, 4, 7, 3, 2, 1, 8, 9]
// console.log(numbers);

const names = ['miraj', 'siraj', 'lutfa', 'labib', 'adiba']
// console.log(names);


//^ sort()
numbers.sort()
// console.log(numbers);

names.sort()
// console.log(names);



//^ ascending
const nums = [3, 112, 4, 100, 353, 63, 23, 90, 1, 2,]
// console.log(nums);
nums.sort()
// console.log(nums);
nums.sort(function (a, b) { return a - b })
// console.log(nums);

//^ descending
nums.sort()
// console.log(nums);
nums.sort(function (a, b) { return a - b })
// console.log(nums);
nums.sort(function (a, b) { return b - a })
// console.log(nums);
