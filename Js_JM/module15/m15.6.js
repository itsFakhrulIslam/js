/**
 *^ different way to use loops
 ** 1. odd-even number print by for, while loop, tow way to explain simple with condition.
 ** 2. 
 */

//^ 1 no problem
//& simple way to explain
//* odd by for loop
for (let i = 1; i < 10; i += 2) {
    // console.log(i);
}

//* odd by while loop
let i = 1
while (i < 10) {
    // console.log(i);
    i += 2
}

//* even by for loop
for (let i = 0; i < 10; i += 2) {
    // console.log(i);
}

//* even by while loop
let ii = 0
while (ii < 10) {
    // console.log(ii);
    ii += 2
}

//& conditional way to explain
//* odd by for loop
for (let num = 0; num < 10; num++) {
    // console.log(num);

    if (num % 2 == 1) { //^ change here
        // console.log(num);
    }
}
//! or
for (let num = 0; num < 10; num++) {
    // console.log(num);

    if (num % 2 !== 0) { //^ change here
        // console.log(num);
    }
}

//* odd by while loop
let num = 0
while (num <= 10) {
    // console.log(num);

    if (num % 2 == 1) { //^ change here
        // console.log('odd num:', num);
    }
    num++
}
//! or
let num1 = 0
while (num1 <= 10) {
    // console.log(num1);

    if (num1 % 2 !== 0) { //^ change here
        // console.log('odd num1:', num1);
    }
    num1++
}

//* even by for loop
for (let num = 0; num < 10; num++) {
    // console.log(num);

    if (num % 2 == 0) { //^ change here
        // console.log('even num is:', num);
    }
}
//! or
for (let num = 0; num < 10; num++) {
    // console.log(num);
    
    if (num % 2 !== 1) { //^ change here
        // console.log('even num is:', num);
    }
}

//* even by while loop
let num2 = 0
while (num2 <= 10) {
    // console.log(num2);

    if (num2 % 2 == 0) { //^ change here
        // console.log('even num2 is:', num2);
    }
    num2++
}
//! or
let num3 = 0
while (num3 <= 10) {
    // console.log(num3);

    if (num3 % 2 !== 1) { //^ change here
        // console.log('even num3:', num3);
    }
    num3++
}
