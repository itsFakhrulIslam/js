/**
 *! topic of object
 ** 1. object define
 ** 2. access to object
        1. dot notation
        2. bracket notation
 ** 3. set key, value or Key+Value (not use this time)
 ** 3. update/change key, value or Key+Value
 */

//^
const person = {
    name: 'miraj',
    age: 24,
    isMale: true,
    'present address':'digubabur bazar'
}
// console.log(person);

//^
// console.log(person.age);
// console.log(person['present address']);

//^
person.age = 26
console.log(person);
const boyos = person.age //*store in a variable 