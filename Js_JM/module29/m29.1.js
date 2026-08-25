// es6 topics

//^ Assignment to constant variable/cannot re-declaration
// const name = 'mia'
// name = 'miraj' //* not access-able
// console.log(name);

//^ access to define a value to customization
// let price = 120
// price = 150
// console.log(price);

//^ Cannot access 'age' before initialization
// console.log(age);
// let age = 24
// const age = 24

//^ Assignment to constant variable, but modified(push/pop, delete obj.name) only for array/object.
//~ array
// const names = ['miraj', 'shahajadi', 'labib']
// names = ['hello'] //* not access-able
// names.push('adiba') //* its access-able
// names.pop() //* its access-able
// console.log(names);

//~ object
// const obj = {
//     name: 'miraj',
//     fullName: 'miraj hossain',
//     age: 24,
// }
// obj = {
//     name: 'siraj'
// } //* not access-able
// delete obj.name
// console.log(obj);
