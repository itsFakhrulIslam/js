// topic of the es6
/**
 * 1. template string (``)
 * 2. arrow function ( ()=>{} )
 * 3. spread operator
 * 4. regular function
 * 5. hoisting
 *      regular function
 *      var variable
 */

// ^1
const name = 'miraj hossen'
const age = 23
const mySelf = `My name is ${name}, i am ${age} years old.`
// console.log(mySelf);

// ^2
const mySelf1 = (nameParams, ageParams = 0) => {
    return `My name is ${nameParams}, i am ${ageParams} years old.`
}
// console.log(mySelf1(name,age));
// console.log(mySelf1(name));
// console.log(mySelf1());

// ^3
const numberArray = (...rest) => {
    return rest;
}
const result = numberArray(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(result);
console.log(...result);

const newResultArr = [10, 11, ...result]
console.log(newResultArr);
console.log(...newResultArr);


// ^4
function greet() {
    // console.log(arguments);
}
// console.log(greet());

// ^5
// console.log(sName);
// console.log(greet1());

function greet1() {
    // console.log(arguments);
}
var sName = 'siraj'
