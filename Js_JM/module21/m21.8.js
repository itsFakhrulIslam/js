/**
 *^ type validation
 ** 1. number only number not entry string
 ** 2. string only string not entry number
 ** 3. object only object not entry number/string/array
 ** 4. array only array not entry number/string/object
 */

// function numberType(a, b) {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
//     console.log(a % b);
// }

// function numberType(a, b) {
//     console.log(typeof a);
//     console.log(typeof b);
// }

// number
function numberType(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('hello provide a number!');
    }
    else {
        return a + b
    }
}

const numberResult = numberType(1, 20)
console.log(numberResult);

// string
function stringType(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
        console.log('hello provide a string!');
    }
    else {
        return `hello ${a} and ${b}`
    }
}
const stringResult = stringType('miraj', 'shahajadi')
console.log(stringResult);
