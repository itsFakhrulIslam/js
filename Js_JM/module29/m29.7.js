//^ topic of the destructuring
/**
 * 1. object
 * 2. array
 */

//^ 
const person = {
    name: 'miraj',
    age: 24
}
console.log(person);

const { name, age } = person
console.log(name, age);

//^ 
const numbers = [12, 42, 45]
console.log(numbers);

const [first, second, third] = numbers
console.log(first, second, third);
