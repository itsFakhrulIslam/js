/**
 *^ 1ti numbers array theke odd-even alada kore sum ber kora and odd-even number golor average ber kra
 ** 1. define a function 
 ** 2. define a array 
 ** 3. print the an array by log 
 ** 4. separate the odd-even number and print
 ** 5. sum all odd-even number
 ** 6. print the average number of odd-even
 */

//^ odd
function oddAverage(params) {
    // console.log(params);

    const oddNumbers = []
    for (const number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number)
        }
    }
    // console.log(oddNumbers);

    let oddSum = 0
    for (const oddNumber of oddNumbers) {
        oddSum += oddNumber
    }
    // console.log(oddSum);

    let count = oddNumbers.length
    // console.log(count);

    let avg = oddSum / count
    // console.log(avg);

    return avg
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

// const numbers1 = [42, 13, 58, 65, 81, 96, 7]

const oddNumberAverage = oddAverage(numbers)
console.log('odd', oddNumberAverage);


//^ even

function evenAverage(params) {
    // console.log(params);

    const evenNumbers = []
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number)
        }
    }
    // console.log(evenNumbers);

    let evenSum = 0
    for (const evenNumber of evenNumbers) {
        evenSum += evenNumber
    }
    // console.log(evenSum);

    let count = evenNumbers.length
    // console.log(count);

    let avg = evenSum / count
    // console.log(avg);

    return avg
}

const evenNumberAverage = evenAverage(numbers)
console.log('even', evenNumberAverage);