//^ arrow function but many kind of function
/**
 * 1. regular function / function declaration
 * 2. function expression
 * 3. arrow function
 *      1. const arrowFunc =(a)=>{ return a*a }
 *      2. const arrowFunc = a => a * a
 *      3. const arrowFunc = (a , b) => a * b
 */

//^ regular function / function declaration
function addition(a, b = 0) {
    let result = a + b

    console.log(result);
}
addition(10, 20)

//^ function expression
const addition1 = function (a, b = 0) {
    let result = a + b

    console.log(result);
}
addition1(20, 20)

//^ arrow function
const addition2 = (a, b = 0) => {
    let result = a + b

    console.log(result);
}
addition2(20, 30)

//^ arrow version 2
const addition3 = (a, b = 0) => a + b
console.log(addition3(50, 90));
//* this way directly return the value without return keyword

//^ version 3
const addition4 = a => a + a
console.log(10);
