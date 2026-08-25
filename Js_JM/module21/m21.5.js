const products = [
    { name: 'shampoo', price: 300, quantity: 5 },
    { name: 'shampoo1', price: 400, quantity: 3 },
    { name: 'shampoo2', price: 500, quantity: 12 },
    { name: 'shampoo3', price: 600, quantity: 1 },
    { name: 'shampoo4', price: 700, quantity: 18 }
]
// console.log(products);

//^
function productPrice(params) {
    let totalProductPrice = 0;
    for (const element of params) {
        totalProductPrice += element.price
    }

    return totalProductPrice
}
const allPrice = productPrice(products)
// console.log('final price',allPrice);

function shoppingCart(params) {
    // console.log(params[1].quantity);

    let total = 0
    for (const item of params) {

        // const productCost = item.price * item.quantity
        // console.log(productCost);
        // total+=productCost

        total += item.price * item.quantity
    }
    return total
}
const shoppingCost = shoppingCart(products)
console.log(shoppingCost);



//^
// const prices = [300, 400, 500, 600, 700]
// console.log(prices);

// function sumPrice(params) {
//     let sum = 0
//     for (const price of params) {
//         sum += price
//     }
//     return sum
// }
// const total = sumPrice(prices)
// console.log('total price is: ', total);

// sumPrice(products)