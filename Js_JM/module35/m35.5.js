// ^topic of js more concept
/**
 * 1. object
 **      convert object to jsonData
 **      convert jsonData to object
 * 2. fetch
 * 3. object 
 *      keys
 *      values
 *      nested keys & values(Recursion)
 * 4. array
 *      add new data
 */

// ^1
// const person = {
//     name: 'miraj',
//     age: 24,
//     city: 'narayanganj',
//     isMale: true
// }
// console.log(person);

// *
// const jsonPerson = JSON.stringify(person)
// console.log(jsonPerson);

// *
// const objectPerson = JSON.parse(jsonPerson)
// console.log(objectPerson);

// ^2
// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         data.map(item => {
//             console.log(item.name)
//         })
//     })

// ^3
// const members = {
//     familyName: 'gazi',
//     fathersName: 'Abdul Mozid Gazi',
//     age: 74,

//     hisSon: {
//         name: 'Abdul Kuddus Gazi',
//         age: 63,

//         hisSon: {
//             name: 'miraj hossen',
//             age: 23,

//             wife: {
//                 name: 'shahajadi akter',
//                 age: 21
//             }
//         }
//     }
// }

//
// const membersKeys = Object.keys(members)
// console.log(membersKeys);

//
// const membersValues = Object.values(members)
// console.log(membersValues);

// সব কী বের করার জন্য একটি রিকার্সিভ ফাংশন
// function getAllKeys(obj) {

//     let keys = [];

//     for (let key in obj) {

//         keys.push(key); // বর্তমান লেভেলের কী পুশ করো

//         if (typeof obj[key] === 'object' && obj[key] !== null) {

//             // যদি ভ্যালুটি আবার অবজেক্ট হয়, তবে ফাংশনটি আবার কল করো
//             keys = keys.concat(getAllKeys(obj[key]));

//         }

//     }

//     return keys;
// }

// const allKeys = getAllKeys(members);
// console.log(allKeys);


// সব Value বের করার রিকার্সিভ ফাংশন
// function getAllValues(obj) {

//     let values = [];

//     for (let key in obj) {

//         // যদি ভ্যালুটি একটি অবজেক্ট হয় (এবং null না হয়), তবে আবার ভেতরে ঢোকো

//         if (typeof obj[key] === 'object' && obj[key] !== null) {

//             values = values.concat(getAllValues(obj[key]));
//         } else {

//             // যদি সাধারণ ভ্যালু (String, Number) হয়, তবে অ্যারেতে পুশ করো

//             values.push(obj[key]);
//         }
//     }

//     return values;
// }

// const allValues = getAllValues(members);
// console.log(allValues);

// ^4
const phones = [
    { name: "iPhone 15 Pro", brand: "Apple", price: 125000, color: "Natural Titanium" },
    { name: "Galaxy S24 Ultra", brand: "Samsung", price: 135000, color: "Titanium Gray" },
    { name: "Pixel 8 Pro", brand: "Google", price: 95000, color: "Bay Blue" },
    { name: "Redmi Note 13 Pro", brand: "Xiaomi", price: 38000, color: "Midnight Black" },
    { name: "OnePlus 12", brand: "OnePlus", price: 85000, color: "Silky Black" },
    { name: "X100 Pro", brand: "Vivo", price: 92000, color: "Asteroid Black" },
    { name: "Realme GT 5", brand: "Realme", price: 45000, color: "Silver" },
    { name: "Zenfone 10", brand: "ASUS", price: 75000, color: "Aurora Green" },
    { name: "Nothing Phone (2)", brand: "Nothing", price: 65000, color: "Dark Grey" },
    { name: "Moto Edge 50 Pro", brand: "Motorola", price: 55000, color: "Luxe Lavender" }
];
// console.log(phones.map(phone => phone.brand));

//
const singleNewPhone = {
    name: 'innova30',
    brand: 'symphony',
    price: 12990,
    color: 'grey'
}

const addNewPhone = [...phones, singleNewPhone]
// console.log(addNewPhone);

// 
const multipleNewPhone = [
    {
        name: 'z72',
        brand: 'symphony',
        price: 11190,
        color: 'silver'
    },
    {
        name: 'romio',
        brand: 'walton',
        price: 9990,
        color: 'golden'
    }
]
// console.log(multipleNewPhone);

//
const addToExistingPhone = [...phones, ...multipleNewPhone]
// console.log(addToExistingPhone);
