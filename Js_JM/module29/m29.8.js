//^ entities, key, values, delete, freeze, seal
/**
 * 1. keys
 * 2. values
 * 3. entries
 * 4. delete
 * 5. freeze(no modified/delete/create to object)
 * 6. seal(no delete/create but modification is access to the object)
 */

//^
const person = {
    name: 'miraj',
    age: 24,
    isMale: true,
    city: 'narayanganj',
    code: 1400
}
console.log(person);
// 
const keys = Object.keys(person)
console.log(keys);
console.log(...keys);
// 
const values = Object.values(person)
console.log(values);
console.log(...values);
// 
const entries = Object.entries(person)
console.log(entries);
console.log(...entries);
console.log(entries[1]);
console.log(...entries[1]);
// 
// delete person.code
console.log(person);
// 
Object.freeze(person)
delete person.code
person.location = 'bandar'
person.age = 42
console.log(person);
