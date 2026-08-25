/**
 *^ topic of the 'array of object'
 ** 1. general array
 ** 2. empty object of array
 ** 3. array of object / object of array
 */

//^
const numbers = [1, 23, 4, 56, 7, 9]
const names = ['asif', 'nasif', 'kasif', 'lasif']

//^ 
const users = [{}, {}, {}, {}]

//^
const employees = [
    {
        name: 'miraj',
        age: 24,
        isMale: true
    },
    {
        name: 'adiba',
        age: 1,
        isMale: false
    },
    {
        name: 'shahajadi',
        age: 20,
        isMale: false
    },
    {
        name: 'labib',
        age: 6,
        isMale: true
    }
]
// console.log(employees);
// console.log(employees[2]);
// console.log(employees[2].isMale);

//! by loop

// for
for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    // console.log(element.name, element.age, element.isMale);
}

// while
let i = 0
while (i < employees.length) {
    // console.log(employees[i].name, employees[i].age);
    i++
}

// for of
for (const element of employees) {
    // console.log(element.name, element.isMale);
}

// for in
for (const key in employees) {
    console.log(employees[key].isMale);
}