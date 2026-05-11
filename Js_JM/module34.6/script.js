console.log('file connected');

//^ topic of the localStorage
/**
 * 1. primitive (number, string, boolean)
 * 2. object
 * 3. array
 */

//^ for primitive
const setItemLS = () => {
    console.log('item set');

    const number = 30
    localStorage.setItem('set number', number)
}
const getItemLS = () => {
    console.log('item get');

    const number = localStorage.getItem('set number')
    alert(number)
}
const removeItemLS = () => {
    console.log('item remove');

    const number = localStorage.removeItem('set number')
    console.log('remove number', number);
}


//^ for object
const setObjectLS = () => {
    console.log('Object set');

    const person = {
        name: 'miraj',
        age: 23,
        city: 'narayanganj'
    }

    const convertPerson = JSON.stringify(person)

    localStorage.setItem('personObj', convertPerson)
}
const getObjectLS = () => {
    console.log('Object get');

    const personOutput = localStorage.getItem('personObj')
    alert(personOutput)

    const personParseData = JSON.parse(personOutput)
    console.log(personParseData);
}
const removeObjectLS = () => {
    console.log('Object remove');

    const personRemove = localStorage.removeItem('personObj')
}



// for array
const setArrayLS = () => {
    console.log('Array set');

    const numbers = [1, 2, 3, 4, 5]

    const convertNumbers = JSON.stringify(numbers)

    localStorage.setItem('numberArr', convertNumbers)
}
const getArrayLS = () => {
    console.log('Array get');

    const numbersOutput = localStorage.getItem('numberArr')

    alert(numbersOutput)
}
const removeArrayLS = () => {
    console.log('Array remove');

    const numberArrRemove = localStorage.removeItem('numberArr')
}


// for clear data
const clearData = () => {
    localStorage.clear()
}