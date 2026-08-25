/**
 *^ duplicate value an array to remove the values 
 */

const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'kabul']

function removeDuplicateArrayValue(arrayParams) {
    console.log(arrayParams);

    let uniqueArray = []

    for (const element of arrayParams) {
        if (uniqueArray.includes(element) === false) {
            uniqueArray.push(element)
        }
    }
    return uniqueArray
}
const uniqueArrayResult = removeDuplicateArrayValue(biriyaniKhor)
console.log(uniqueArrayResult);
