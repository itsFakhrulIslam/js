//! multiple condition
let weight = 50;
let age = 20
let isMale = true

//^ and: &&
if (weight > 40 && age > 18) {
    // console.log('he is fit');
} else {
    // console.log('he is not fit');
}

//^ or: ||
if (weight > 60 || age > 28) {
    // console.log('he is fit but ready to work');
} else {
    // console.log('he is totally not fit ');
}

//& complex condition
//^ and: && once more
if (weight > 40 && age > 18 && isMale) {
    // console.log('he is fit');
} else {
    // console.log('he is not fit');
}


//^ or: || once more
if (weight > 60 || age > 28 || !isMale) {
    // console.log('he is fit');
} else {
    // console.log('he is not fit');
}

//^ and+or: && + ||
if ((weight > 60 || age > 28 || !isMale) && weight > 40) {
    console.log('he is fit');
} else {
    console.log('he is not fit');
}