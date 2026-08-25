/**
 *^ matched product print by function
 */

const products = [
    { id: 1, name: "Smart Watch Elite", price: 2500 },
    { id: 2, name: "Smart Watch Pro", price: 3500 },
    { id: 3, name: "Gaming Mouse RGB", price: 1200 },
    { id: 4, name: "Gaming Keyboard Mechanical", price: 4500 },
    { id: 5, name: "Pro Headphones Wireless", price: 5000 },
    { id: 6, name: "Smart LED Bulb", price: 800 },
    { id: 7, name: "Gaming Chair Ergonomic", price: 15000 },
    { id: 8, name: "Pro USB Microphone", price: 7000 },
    { id: 9, name: "Smart Door Lock", price: 12000 },
    { id: 10, name: "Gaming Monitor 144Hz", price: 22000 },
    { id: 11, name: "Smart Water Bottle", price: 1500 },
    { id: 12, name: "Pro Laptop Stand", price: 2000 },
    { id: 13, name: "Gaming Mousepad XL", price: 600 },
    { id: 14, name: "Smart Security Camera", price: 3200 },
    { id: 15, name: "Pro DSLR Camera Case", price: 1800 },
    { id: 16, name: "Gaming Controller Wireless", price: 3800 },
    { id: 17, name: "Smart Fitness Tracker", price: 2200 },
    { id: 18, name: "Pro Studio Speakers", price: 9000 },
    { id: 19, name: "Gaming PC Case", price: 5500 },
    { id: 20, name: "Smart Wi-Fi Router", price: 4000 }
];

function matchedProduct(array, search) {
    // console.log(array, search);

    let matched = []
    for (const element of array) {
        if (element.name.toLowerCase().includes(search.toLowerCase().trim())) {
            matched.push(element)
        }
    }
    console.log('matched is', matched);
}
matchedProduct(products, 'gaming')
matchedProduct(products, '            gaming         ')