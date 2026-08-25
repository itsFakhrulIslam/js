//^ default parameters
/**
 * addition, subtract = 0 (default value)
 * multiply = 1 (default value)
 * string = '' (default value)
 * array = [] (default value)
 * object = {} (default value)
 */

//^ normal/regular function
// function add(a, b) {
//     let result = a + b

//     console.log(result);
// }
// add(10, 20) //* 30
// add(10) //* NaN( 10 + undefined )
// add() //* NaN( undefined + undefined)

//^ default parameters function
// function add1(a = 0, b = 0) {
//     let result = a + b

//     console.log(result);
// }
// add1()
// add1(10)
// add1(10, 10)

//

// function greet(name = 'Guest') {
//     console.log("hello", name);
// }
// greet()
// greet('miraj')
// greet('shahajadi')