/**
 *^ make a calculator by function
 */

function plus(a, b) {
    const result = a + b
    return result
}

function minus(a, b) {
    const result = a - b
    return result
}

function into(a, b) {
    const result = a * b
    return result
}

function div(a, b) {
    const result = a / b
    return result
}

function remain(a, b) {
    const result = a % b
    return result
}

// const addition = plus(10, 5)
// console.log(addition);

// const subtraction = minus(10, 5)
// console.log(subtraction);

// const multiply = into(10, 5)
// console.log(multiply);

// const division = div(10, 5)
// console.log(division);

// const modulus = remain(10, 3)
// console.log(modulus);

//^ calculator
function calculator(a, b, operation) {
    if (operation === 'plus') {
        const result = plus(a, b)
        return result
    }
    else if (operation === 'minus') {
        const result = minus(a, b)
        return result
    }
    else if (operation === 'into') {
        const result = into(a, b)
        return result
    }
    else if (operation === 'div') {
        const result = div(a, b)
        return result
    }
    else {
        const result = remain(a, b)
        return result
    }
}

const result_add = calculator(10, 5, 'plus')
const result_minus = calculator(10, 5, 'minus')
const result_into = calculator(10, 5, 'into')
const result_div = calculator(10, 5, 'div')
const result_remain = calculator(10, 3, 'remain')

console.log(result_add);
console.log(result_minus);
console.log(result_into);
console.log(result_div);
console.log(result_remain);
