/**
 *^ topic of the array reversing
 ** 1. array.reverse()
 ** 2. array.unshift()
 ** 3. array.length-1 (in for loop)
 */


const fruits = ['apple', 'orange', 'banana', 'guava', 'water melon', 'star fruit']
// console.log(fruits);

//^ 1
// console.log(fruits.reverse());

//^ 2
for (i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}
// or 
let reverseArray = []
for (i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    reverseArray.unshift(fruits[i])
}
// console.log(reverseArray);

//^ 3
for (i = fruits.length - 1; i >= 0; i--) {
    // console.log(fruits[i]);
}