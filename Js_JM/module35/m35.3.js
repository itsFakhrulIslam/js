// ^ topic of the array methods
/**
 * 1. map(), return something
 * 2. forEach(), return nothing
 * 3. filter(), return something
 * 4. find(), return at a time first one object/array element
 * 
 * * special part reusable function
 */

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
// console.log(phones);
// console.log(phones.length);

// ^1 list of similar types data return an array
//* names 
const nameArr = phones.map(phone => phone.name)
// console.log('name',nameArr);

//*brand
const brandArr = phones.map(phone => phone.brand)
// console.log('brand',brandArr);

//*price
const priceArr = phones.map(phone => phone.price)
// console.log('price',priceArr);

//*color
const colorArr = phones.map(phone => phone.color)
// console.log('color',colorArr);

// ^2
// *name
phones.forEach(phone => {
    // console.log(phone.name);
});
// *brand
phones.forEach(phone => {
    // console.log(phone.brand);
});
// *price
phones.forEach(phone => {
    // console.log(phone.price);
});
// *color
phones.forEach(phone => {
    // console.log(phone.color);
});

// ^3
const under60kPrice = phones.filter(phone => phone.price <= 60000)
// console.log(under60kPrice);

under60kPrice.forEach(cheapPhone => {
    // console.log(cheapPhone.price)
})

// ^4
const productFind = phones.find(phone => phone.brand === 'Apple')
// console.log(productFind);

const productFind1 = phones.find(phone => phone.brand.toLowerCase() === 'apple')
// console.log(productFind1);

//* reusable 
// একটি ফাংশন যা যেকোনো প্রোপার্টি নাম আর্গুমেন্ট হিসেবে নিতে পারে
const getPhoneData = (property) => {
    return phones.map(phone => phone[property]);
};

// এখন আপনি খুব সহজেই ডাটাগুলো কল করতে পারবেন
const names = getPhoneData('name');
const brands = getPhoneData('brand');
const prices = getPhoneData('price');
const colors = getPhoneData('color');

console.log('Reusable: ', names);
console.log('Reusable: ', brands);
console.log('Reusable: ', prices);
console.log('Reusable: ', colors);