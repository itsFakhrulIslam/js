/**
 *^ topic of the copy (Copy array elements to another array)
 ** 1. primitive data type copy
 ** 1. non-primitive data type copy (reference copy)

 *~ multiple way to copy an array (without reference copy)
 ** 1. loop by push an empty array
 ** 2. const copyArray = Array.from(existingArray)
 ** 3. const copyArray = [].concat(existingArray)
 ** 4. const copyArray = [...existingArray]
 */


//^ its not work for primitive data types
let own_price = 20
let copy_price = own_price

// console.log(own_price);
// console.log(copy_price);

//* mutates price //its does'nt work
own_price = 25
copy_price = 15

// console.log(own_price);
// console.log(copy_price);


//^ 
let products_price = [13, 56, 78, 90]
let products_copy_price = products_price

// console.log(products_price);
// console.log(products_copy_price);

//* mutates price / its work, because they point one dot or similar dot so its mutates
products_price[0] = 20
products_copy_price[3] = 50

// console.log(products_price);
// console.log(products_copy_price);


//! multiple way to copy an array
const names = ['miraj','siraj','adiba']
// console.log(names);

//^ for of loop copy
let copyName = []
for (const name of names) {
    copyName.push(name)
}
// console.log('copy:',copyName);
copyName.push('labib')
// console.log('pushing:',copyName);

//^
const copyName0 = Array.from(names)
// console.log(copyName0);

copyName0.pop()
// console.log(copyName0);

//^ 
const copyName1 = [].concat(names)
// console.log(copyName1);

copyName1.shift()
// console.log(copyName1);

//^ 
const copyName2 = [...names]
// console.log(copyName2);

copyName2.unshift('ma')
// console.log(copyName2);