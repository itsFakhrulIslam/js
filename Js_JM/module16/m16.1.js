/**
 *^ topic of the string
 ** different way to define a string
    1. double quote: ""
    2. single quote: ''
    3. back tick : ``
    4. new String()

 ** string methods
    1. length
    2. index
    
 *! string is immutable / not changeable
 *! array is mutable / changeable
 */

//^ double quote
const doubleQuote = "double quote"
// console.log(doubleQuote);


//^ single quote
const singleQuote = 'single quote'
// console.log(singleQuote);


//^ back tick
const backTick = `back tick`
// console.log(backTick);


//^ new String
const specialString = new String('special String')
// console.log(specialString);
// console.log(typeof specialString); //^object


//^ length
const names = 'miraj'
// console.log(names);
// console.log(names.length);
//^ index
// console.log(names[1]);

//^ string immutable / not changeable
const myName = 'siraj'
// console.log(myName[0]);
// console.log(myName);
myName[0] = 'm'
// console.log(myName);

//^ array mutable / changeable
const fruits = ['apple', 'kola']
console.log(fruits);
fruits[1] = 'banana'
console.log(fruits);