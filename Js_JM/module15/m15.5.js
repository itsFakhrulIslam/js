/**
 *^ problem solving with for loops
 ** 1. 11-20 to sum number print.
 ** 2. reversing the loop increment to decrement 1-10 print number.
 ** 3. up problem using by while loop
 */

//^ 1 no problem
let sum = 0
for (let num = 11; num < 20; num++) {
    // console.log(num);

    sum = sum + num
    // console.log('sum is:', sum);
}
// console.log(sum);

//^ 2 no problem
//* increment
for (let num0 = 1; num0 <= 10; num0++) {
    // console.log(num0);
}

//* decrement
for (let num0 = 10; num0 >= 1; num0--) {
    // console.log(num0);
}

//^ 3 no problem
//* increment
let num1 = 1
while (num1 <= 10) {
    console.log(num1);
    num1++
}

//* decrement
let num2 = 10
while (num2 >= 1) {
    console.log(num2);
    num2--
}