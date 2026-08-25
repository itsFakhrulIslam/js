/**
 *^ topic of the function
 ** 1. conditional return
 */

//^ 
function isEven(number) {
    if (number % 2 === 0) {
        return `the number is even: ${true}`
    } else {
        return `the number is even: ${false}`
    }
}
console.log(isEven(5));
console.log(isEven(4));

function isOdd(number) {
    if (number % 2 !== 0) {
        return `the number is odd: ${true}`
    } else {
        return `the number is odd: ${false}`
    }
}
console.log(isOdd(5));
console.log(isOdd(4));
// or
function isEven(number) {
    if (number % 2 === 0) {
        return `the number is even: ${true}`
    }
    return `the number is even: ${false}`

}
console.log(isEven(5));
console.log(isEven(4));

function isOdd(number) {
    if (number % 2 !== 0) {
        return `the number is odd: ${true}`
    }
    return `the number is odd: ${false}`
}
console.log(isOdd(5));
console.log(isOdd(4));