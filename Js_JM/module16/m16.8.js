const person = {
    name: 'miraj',
    age: 24,
    isMale: true,
    'present address': 'digubabur bazar',
    subject: ['bangla', 'english']
}
const allKeys = Object.keys(person)
console.log(allKeys);
const allValues = Object.values(person)
console.log(allValues);

const secondSubKi = person.subject[1]
console.log(secondSubKi);
const subAdd = person.subject[2] = 'math'
console.log(subAdd);
console.log(person.subject);