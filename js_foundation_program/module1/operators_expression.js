/**
 *! all operators
 * 1. arithmetic ( +, -, *, /, %)
 *      Arithmetic precision- a + b - c * d / e + (f + g) notes
 * 2. assignment ( =, +=, -=, *=, /=)
 * 3. comparison ( <, >, <=, >=, ==, !=, ===, 1== )
 * 4. logical ( &&, ||, !)
 */

//1
let a = 20;
let b = 30;

let addition = a + b;
let substraction = a - b;
let multiplication = a * b;
let divition = a / b;
let reminder_modulous = a % b;

// console.log(addition);
// console.log(substraction);
// console.log(multiplication);
// console.log(divition);
// console.log(reminder_modulous);

//2
let c = 30;
c += 40;
c -= 40;
c *= 40;
c /= 40;
c %= 40;
// console.log(c);

//3
let myDoB = 2004;
let herDoB = 2005;
let taller = myDoB > herDoB;
console.log("me", taller && myDoB);
