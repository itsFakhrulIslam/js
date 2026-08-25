/**
 ** 1ti arrayr all number golor sum ber koro function er maddhome.
 *^ step by step problem solved
 ** 1. define a function
 ** 2. print log to the function
 ** 3. declare a numbers array
 ** 4. array pass as a argument
 ** 5. print received array params
 ** 6. sum to all number to the array by loop(for, while, of, in)
 */

//^
function sumAllNumber(params) {

}
// sumAllNumber()

//^
function sumAllNumber(params) {
    // console.log('hello', params);
}
// sumAllNumber()  

//^
function sumAllNumber(params) {
    // console.log('the numbers of array', params);
}
// const numbers = [1, 2, 3, 4, 5]
// sumAllNumber(numbers)  

//^ for
function sumAllNumber(params) {
    let sum = 0
    for (let i = 0; i < params.length; i++) {
        sum += params[i]
    }
    // console.log(sum);
}
// const numbers = [1, 2, 3, 4, 5]
// sumAllNumber(numbers)  

//^ while
function sumAllNumber(params) {
    let sum = 0
    let i = 0
    while (i < params.length) {
        sum += params[i]   
        i++
    }    
    // console.log(sum);
}
// const numbers = [1, 2, 3, 4, 5]
// sumAllNumber(numbers)  

//^ in
function sumAllNumber(params) {
    let sum = 0
    for (const param in params) {        
        sum+=params[param]        
    }    
    // console.log(sum);
}
// const numbers = [1, 2, 3, 4, 5]
// sumAllNumber(numbers)  

//^ of
function sumAllNumber(params) {
    let sum = 0
    for (const param of params) {        
        sum+=params[param] 
    }  
    // console.log(sum);
}
// const numbers = [1, 2, 3, 4, 5]
// sumAllNumber(numbers)  