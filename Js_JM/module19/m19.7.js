/**
 ** parameters hisebe akti string pass kora hobe, character count kore bolte hobe even or odd number of character.
 *^ step by step a problem solved 
 ** 1. define a function
 ** 2. check the function work? by console.log()
 ** 3. set a param in function
 ** 4. pass the argument in function to received as params
 ** 5. print to the received the params
 ** 6. print to the received the params length
 ** 7. check to the received the params is even or odd print by log
 ** 8. check to the received the params is even or odd return by 'return' keyword and print boolean value.
 */

function stringSized() {
}
// stringSized()

//^
function stringSized() {
    // console.log('logged');
}
// stringSized()

//^
function stringSized(param) {
    // console.log('logged', param);
}
// stringSized()

//^
function stringSized(param) {
    // console.log('logged', param);
}
// stringSized('the function')

//^
function stringSized(param) {
    const paramLength = param.length
    // console.log('logged', param);
    // console.log(paramLength);
}
// stringSized('the function')

//^
function stringSized(param) {
    const paramLength = param.length
    // console.log(paramLength);
    
    if (paramLength % 2 === 0) {
        // console.log('this is even size');
    }
    else {
        // console.log('this is odd size');
    }
}
// stringSized('the function')
// stringSized('this is miraj')


//^
function stringSized(param) {
    const paramLength = param.length
    // console.log(paramLength);

    if (paramLength % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
// console.log(stringSized('the function'))
// console.log(stringSized('this is miraj'))