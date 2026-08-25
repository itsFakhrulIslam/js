/**
 *! problem solving
 ** 1. 1-10 to print all number.
 ** 2. 50-100 to print all number.
 ** 3. 1-10 to sum number print.
 ** 4. 1-10 to print even all number.
 ** 5. 1-10 to print odd all number.
 */


//^ 1 no problem
let num = 1
while (num < 10) {
    // console.log(num);
    num++
}
// or
let num0 = 11
while (num0 <= 20) {
    // console.log(num0);
    num0++
}


//^ 2 no problem
let num1 = 50
while (num1 <= 100) {
    // console.log(num1);
    num1++
}


//^ 3 no problem
let num2 = 1
let sum = 0
while (num2 <= 10) {
    // console.log(num2);

    sum = sum + num2
    // console.log('sum:', sum);

    num2++
}


//^ 4 no problem
let num3 = 1
while (num3 <= 10) {
    // console.log(num3);

    if (num3 % 2 == 0) {
        // console.log('even number:',num3);
    }

    num3++
}


//^ 5 no problem
let num4 = 1
while (num4 <= 10) {
    // console.log(num4);

    if (num4 % 2 == 1) {
        // console.log('odd number:',num4);
    }

    num4++
}