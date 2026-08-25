/**
 *^ topic of the unit conversion
 ** 1. feet to inch / inch to feet
 ** 2. mile to kilo / kilo to mile
 ** 3. c.miter to m.miter / m.miter to c.miter 
 ** 4. kg to gram / gram to kg 
 ** 5. miter to c.miter / c.miter to miter 
 ** 6. Celsius to Fahrenheit / fahrenheit to celsius
 ** 7. kilograms to pounds / pounds to kilograms
 ** 8. gallons to liters / liters to gallons
 ** 9. megabytes to gigabytes / gigabytes to megabytes
 ** 10. taka to dollar / dollar to taka
 */

//^ 1
function convertFootToInch(foot) {
    let result = foot * 12
    return result
}
const inch = convertFootToInch(3)
// console.log(inch);

function convertInchToFoot(inch) {
    let result = inch / 12
    return result
}
const foot = convertInchToFoot(36)
// console.log(foot);

//^ 2
function convertKiloToMile(mile) {
    const result = mile * 1.609
    return result
}
const mile = convertKiloToMile(15)
// console.log(mile);

function convertKiloToMile(kilo) {
    const result = kilo / 0.621
    return result
}
const kilo = convertKiloToMile(15)
// console.log(kilo);

//^ 3
function convertCmToMm(cm) {
    let result = cm * 10
    return result
}
const cMiter = convertCmToMm(100)
// console.log('c.miter',cMiter);

function convertMmToCm(mm) {
    let result = mm / 10
    return result
}
const mMiter = convertMmToCm(1000)
// console.log('m.miter',mMiter);

//^ 4
function convertKgToGram(kg) {
    let result = kg * 1000
    return result
}
const kg = convertKgToGram(10)
// console.log(kg);

function convertGramToKg(gram) {
    let result = gram / 1000
    return result
}
const gram = convertGramToKg(10000)
// console.log(gram);

//^ 5
function convertMiterToCm(miter) {
    let result = miter * 100 
    return result
}
const miter = convertMiterToCm(10)
console.log(miter);

function convertCmToMiter(cmiter) {
    let result = cmiter / 100 
    return result
}
const cmiter = convertCmToMiter(1000)
console.log(cmiter);