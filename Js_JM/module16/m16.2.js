/**
 *^ topic of the string 
 ** 1. toLowerCase()
 ** 2. toUpperCase()
 ** 3. trim()

 *^ (comparison)
    1. toLowerCase()
    2. toUpperCase()
    3. trim()
 */

//^ change to lower case
let name = 'MIRAJ HOSSEN'
// console.log(name);
// console.log(name.toLowerCase());

//^ change to upper case
let name1 = 'miraj hossen'
// console.log(name1);
// console.log(name1.toUpperCase());

//^ remove white space in string
let country = ' bangladesh'
// console.log(country);
// console.log(country.trim()); //* remove space both (first + last) position
// console.log(country.trimStart()); //* remove space in first position
// console.log(country.trimEnd()); //* remove space in last position



//^ comparison

//* lowerCase
const emailAddress = 'fakhruls@gmail.com'
const emailIdentity = 'FAKHRULS@GMAIL.COM'

if (emailAddress.toLowerCase() === emailIdentity.toLowerCase()) {
    // console.log('they are same email');
} else {
    // console.log('they are not same');
}

//^ double equal(==) vs triple equal(===)
let number = 10
let inputs = '10'

if (number == inputs) {
    // console.log('look same to same'); //* ans
} else {
    // console.log('not look same same');
}

//* or 

if (number === inputs) {
    // console.log('look same to same');
} else {
    // console.log('not look same same'); //* ans
}

//^ trim
const desh = '              bangladesh'
const cntry = 'Bangladesh          '

if (desh.toLowerCase().trim() === cntry.toLowerCase().trim()) {
    console.log('we are in bd');
} else {
    console.log('we are ruhinga');
}