//^ topic of the react prerequisite
/**
 * 1. let, const (var is dead)
 * 2. if, if else, if else-if else
 * 3. && and, || not (operator) 
 * 4. array
 **      length, 
 **      index, 
 **      push('item'), 
 **      pop(), 
 **      shift(), 
 **      unshift('item'), 
 **      slice(startNumber, endNumber), //! endNumber no included, 	A new array of selected elements
 **      splice(startNumber, endNumber) //! endNumber included, A new array of removed elements
 * 5. loops
 **      for
 **      while
 **      do while
 **      for of 
 **      for in
 **      forEach
 * 6. function
 * 7. object 
 */

// ^1
var isDead = true
// console.log(isDead);

let name = 'miraj'
// console.log(name);
name = 'miraj hossen' //*re assign allowed
// console.log(name);

const country = 'BD'
// console.log(country);
// country = 'india' //*re assign not allowed
// console.log(country);

// ^2
const age = 23
if (age) {
    // console.log('you are a voter');
}

if (age >= 18) {
    // console.log('you are a voter');
} else {
    // console.log('you are not a voter');
}

if (age >= 18) {
    // console.log('you are a voter');
} else if (age >= 10) {
    // console.log('you are a tin a ger');
} else {
    // console.log('you are a smaller');
}

// ^3
const productName = 'tShirt'
const price = 200

if (productName === 'tShirt' && price <= 200) {
    // console.log('i bought this.');
} else {
    // console.log('i do not bought this.');
}

const myAge = 18
if (myAge >= 23 || myAge >= 18) {
    // console.log('you are a eligible for this tour');
} else {
    // console.log('you are not eligible');
}

// ^4
const numbers = [1, 2, 3, 4, 5]
// console.log(numbers);
// console.log('length: ', numbers.length);
// console.log('index: ', numbers[2]);

// numbers.push(6)
// console.log('push: ',numbers);

// numbers.pop()
// numbers.pop()
// console.log('pop: ',numbers);

// numbers.unshift(0)
// console.log('unshift: ',numbers);

// numbers.shift()
// numbers.shift()
// console.log('shift: ',numbers);


//~ not understand properly
// let newNumbersArr = numbers.slice(0, 3)
// let newNumbersArr1 = numbers.slice(-3)
// let newNumbersArr2 = numbers.slice(3)
// console.log('slice: ', newNumbersArr);
// console.log('slice: ', newNumbersArr1);
// console.log('slice: ', newNumbersArr2);

// const newNumbersArray = numbers.splice(0, 3)
// const newNumbersArray1 = numbers.splice(-3)
// const newNumbersArray2 = numbers.splice(3)
// console.log('splice: ', newNumbersArray);
// console.log('splice: ', newNumbersArray1);
// console.log('splice: ', newNumbersArray2);