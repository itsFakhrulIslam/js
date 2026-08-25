//! if else 

let age = 18
if (age > 10) {
    // console.log('you can entry into the shop'); //^run this log
} else {
    // console.log('do not entry');
}


//! nested if else 
let ages = 19
let hasExpertise = true

if (ages > 10) {
    console.log('you can entry into the shop 2'); //^run this log

    if (hasExpertise) {
        console.log('yes you can also running the shop'); //^run this log
    } else {
        console.log('yes but you cant running the shop');
    }

} else {
    console.log('do not entry');
}