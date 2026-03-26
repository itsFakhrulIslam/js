//! delete property and values
const person = {
    name: 'ayesha',
    age: 24,
    city: 'dhaka'
}
// console.log(person);
delete person.age
// console.log(person);

// ------

const identity = {
    name: 'miraj',
    age: 25,
    city: 'chandpur'
}
// console.log(identity);
Object.freeze(identity) // no add, remove or update
identity.hobby = 'wow' // not action to object without "object.freeze comment"
// console.log(identity);

// ------

const user = {
    email: 'miraj@gmail.com',
    pass: '123456'
}
Object.seal(user)
user.name = 'miraj' //not allowed
// console.log(user);
user.pass = '234561' //allowed
// console.log(user);
delete user.email //not allowed
// console.log(user);


//! practice
const headphone = {
    brand: 'sony',
    price: 3000,
    color: 'black'
}
Object.freeze(headphone)
// console.log(headphone);
headphone.madeIn = 'bd' //not work
// console.log(headphone);

// -----

const books = {
    name: 'the bangla',
    author: 'miraj'
}
Object.seal(books)
// console.log(books);
books.author = 'miraj hossain'
// console.log(books);

// -----

const gadget = {
    name: 'iPhone',
    brand: 'apple',
    price: 120000,
    color: 'black'
}
// console.log(gadget);
delete gadget.color
// console.log(gadget);

// -----

const animal = {
    name: 'tiger',
    location: 'bd sundarban'
}
Object.freeze(animal.location)
// console.log(animal);
animal.name = 'royal bengal tiger'
// console.log(animal);

// ---

const food = {
    name: 'pizza',
    price: 120,
    size: 'xl'
}
Object.freeze(food)
// console.log(food);
food.upadan = 'meat'
// console.log(food);