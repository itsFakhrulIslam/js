// ^topic of array/object destructuring
/**
 * 1. array (its serial maintain)
 * 2. object (its not serial maintain)
 */

// ^1
//*
const numbers = [1, 2, 3, 4, 5]
// console.log(numbers);

const [n1, n2, n3, n4, n5] = numbers
// console.log(n1, n2, n3, n4, n5);

// rest destructure
const [el1, el2, el3, ...el4] = numbers
// console.log(el1, el2, el3, el4);

// *
const person = [
    {
        name: 'miraj',
        age: 23
    },
    {
        name: 'siraj',
        age: 33
    },
    {
        name: 'niraj',
        age: 32
    },
    {
        name: 'piraj',
        age: 53
    }
]
// console.log(person);

const [f_el, s_el, ...other_el] = person
// console.log(f_el);
// console.log(s_el);
// console.log(other_el);


// ^2
const mySelf = {
    name: 'miraj',
    age: 23,
    city: 'narayanganj',
    f_member: ['ma', 'wife', 'siblings']
}
// console.log(mySelf);

//* dot notation
// console.log('dot: ', mySelf.name);
// console.log('dot: ', mySelf.age);
// console.log('dot: ', mySelf.city);
// console.log('dot: ', mySelf.f_member);

//* bracket notation
// console.log('bracket: ', mySelf['name']);
// console.log('bracket: ', mySelf['age']);
// console.log('bracket: ', mySelf['city']);
// console.log('bracket: ', mySelf['f_member']);

// 
const { name, age, city, f_member } = mySelf
// console.log(name, age, city, f_member);

// 
const { name:mName, age:mAge, ...others } = mySelf
// console.log(mName, mAge, others);
