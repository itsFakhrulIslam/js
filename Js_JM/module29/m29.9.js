//^ topic of the object loop/looping
/**
 * 1. array loop by "for of loop" 
 * 2. object loop by "for in loop"
 *      keys
 *      values
 *      entries
 *              each value access to for of loop
 */

// ^
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    console.log(number);
}

const person = {
    name: 'miraj',
    age: 24,
    isMale: true,
    city: 'narayanganj',
    code: 1400
}
for (const key in person) {
    // console.log(key);
    console.log(key, ":", person[key]);
}
// 
const keys = Object.keys(person)
for (const key of keys) {
    // console.log(key);
}
// 
const values = Object.values(person)
for (const value of values) {
    // console.log(value);
}
// 
const entries = Object.entries(person)
for (const entry of entries) {
    console.log(entry);
}