//! object keys & values 
const laptop = {
    name: 'acer',
    price: 35000,
    processor: 'intel-i5',
    ssd: '512gb'
}
let laptopKeys = Object.keys(laptop)
// console.log(laptopKeys);

let laptopValues = Object.values(laptop)
// console.log(laptopValues);

let laptopKeysExist = Object.keys(laptop)
let existKeys = laptopKeysExist.includes('ram')
// console.log(existKeys);

let laptopValuesExist = Object.values(laptop)
let existValues = laptopValuesExist.includes('4gb')
// console.log(existValues);


//! object entries
const person = {
    name: 'miraj',
    age: 25,
    born: 'chandpur'
}
// console.log(person);
let personEntries = Object.entries(person)
// console.log(personEntries);


//! object loop ("for in" loop for objects) note: "for of" loop for arrays
const phone = {
    name: '15 pro max',
    brand: 'apple',
    price: 120000
}
for (const key in phone) {
    const value = phone[key]
    // console.log(key, ':', value);
}

//! practice 
