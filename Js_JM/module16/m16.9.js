/**
 *^ topic of the declare multiple way an object
 ** 1. const obj = {}
 ** 2. const car = new Object()
 ** 3. const mobile = Object.create({})
 */

//^
const mobile = {
    brand: 'samsung',
    price: 23000,
    color: 'blue',
    camera: '12mp',
    battery: '50000mAh'
}
// console.log(mobile);
// for(const objItem in mobile){
//     console.log(objItem);
//     console.log(mobile[objItem]);
// }


// all key and values output an array
const allKeys = Object.keys(mobile)
console.log(allKeys);
const allValues = Object.values(mobile)
console.log(allValues);


//^ 
const car = new Object({
    make: "Toyota",
    model: "Corolla",
    year: 2023
})
console.log(car);

//^ 
const mobile1 = Object.create({});

mobile1.brand = "Apple";
mobile1.model = "iPhone 15";
console.log(mobile1);
