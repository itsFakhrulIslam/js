/**
 ** 1ti function likhu jeta return korbe only even numbers print koro
 ** function theke prapto even number golor sum print koro
 //^ step by step problem solved
 ** 1. define a function 
 ** 2. print log for works function properly 
 ** 3. define a array 
 ** 4. pass the array as params 
 ** 5. print the array as params 
 ** 6. print even numbers to the array as params 
 ** 7. print even numbers sum to the array
 */

//^
// function evenNumberOnly(params) {
//     console.log('he',params);
// }
// evenNumberOnly()

//^
// function evenNumberOnly(params) {
//     console.log(params);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// evenNumberOnly(numbers)

//^
// function evenNumberOnly(params) {
//     let evenNumb = []
//     for (const param of params) {
//         if (param % 2 === 0) {
//             console.log('even',param);
//             evenNumb.push(param)
//         }
//     }
//     return evenNumb
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// evenNumberOnly(numbers)
// console.log(evenNumberOnly(numbers));

//^
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// function evenNumberOnly(params) {
//     let evenNumb = []
//     for (const param of params) {
//         if (param % 2 === 0) {
//             evenNumb.push(param)
//         }
//     }
//     return evenNumb
// }
// const allEvenNumb = evenNumberOnly(numbers)

// function sumOfAllEvenNumbers(params) {
//     let sum = 0
//     for (const number of params) {
//         sum += number
//     }
//     return sum
// }
// console.log(sumOfAllEvenNumbers(allEvenNumb));

//! problem task
// problem one
function multiply(a, b, c, d) {
  console.log("params log", a, b, c, d);

  const result = a * b * c * d;
  return result;
}
// const resultOutput = multiply(1, 2, 3, 4);
// console.log(resultOutput);

// problem two
function oddMultiply(a) {
  console.log("odd params log", a);

  if (a % 2 !== 0) {
    console.log("condition log", a);
    return a * 2;
  }
}
// console.log(oddMultiply(111));

function evenDivide(a) {
  console.log("even params log", a);

  if (a % 2 === 0) {
    console.log("condition log", a);
    return a / 2;
  }
}
// console.log(evenDivide(112));
