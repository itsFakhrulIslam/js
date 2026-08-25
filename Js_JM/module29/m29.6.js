//^ topic of spread operator
/**
 * 1. max number find by spread
 * 2. copy array to array
 * 3. copy obj to obj
 */

//^ 
// simple way
const maxNumber = Math.max(1, 2, 45, 6, 7, 77, 896, 977, 45, 767,)
console.log(maxNumber); //* 977

// spread way
const numbers = [1, 2, 45, 6, 7, 77, 896, 977, 45, 767]
console.log(numbers); //* [1,2,45...]
console.log(...numbers); //* 1, 2, 45...

console.log(Math.max(numbers)); //* NaN
console.log(Math.max(...numbers)); //* 977

//^
const firstElement = [1, 2, 3, 4, 5]
const secondElement = firstElement
secondElement.push(6)
console.log(firstElement);

const firstElement1 = [1, 2, 3, 4, 5]
const secondElement1 = [...firstElement1]
secondElement1.push(6)
console.log(firstElement1);
console.log(secondElement1);

//^
const person = {
    name: 'miraj',
    age: 24
}
const address = {
    ...person,
    city: 'narayanganj'
}
console.log(person);
console.log(address);
