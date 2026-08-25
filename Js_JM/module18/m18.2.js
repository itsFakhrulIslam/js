/**
 *^ topic of the array in loop
 ** 1. for loop
 ** 2. while loop
 ** 3. for in loop
 */


const fruits = ['apple', 'orange', 'banana', 'guava', 'water melon', 'star fruit']
// console.log(fruits);

//for loop
for (let i = 0; i < 10; i++) {
    // console.log(i);
    // console.log(fruits[i]);
}
// or
for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    // console.log(element);
}
// or
for (let i = 0; i < fruits.length; i++) {
    // console.log(i, fruits[i]);
}

// while loop
let i = 0
while (i < 10) {
    // console.log(i);
    // console.log(fruits[i]);
    i++
}
// or
let i1 = 0
while (i1 < fruits.length) {
    const element = fruits[i1]
    // console.log(element);
    i1++
}
// or
let i2 = 0
while (i2 < fruits.length) {
    // console.log(fruits[i2]);
    i2++
}

// for in loop
for (const fruit in fruits) {
    // console.log(fruits[fruit]);
}

//^ for of loop (best for array looping)
for (const element of fruits) {
    console.log(element);
}