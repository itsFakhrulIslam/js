/**
 *^ topic of the string
 ** 1. slice()
 ** 2. split()
 ** 3. join()
 ** 4. concat()
 ** 5. includes()
 */


//^ slice
const name = 'miraj'
// console.log(name);
const namePart = name.slice(2, 7)
// console.log(namePart);


//^ split (split / string to array transform)
const sentence = 'i am a good and hardworking person for learning to the earnings'
// console.log(sentence); //*output all sentence
// console.log(sentence.split('')); //*output every-single latter and white space an arrays
// console.log(sentence.split(' ')); //*output every single word an arrays
// console.log(sentence.split('a')); //*print specific by latter(a/b/c bla bla) or word(am/good bla bla) output an arrays

//~ another way to split
const nameStr = 'rahim,karim,nadim,fahim,nabil'
// console.log(nameStr);
// console.log(nameStr.split()); //*output an array
// console.log(nameStr.split(',')); //*output by comma an array every single name


//^ join (array to string transform)
const nameArr = ['rahim', 'karim', 'nadim', 'fahim', 'nabil']
// console.log(nameArr);
// console.log(nameArr.join());
// console.log(nameArr.join('/'));
// console.log(nameArr.join('|'));
// console.log(nameArr.join('-'));
// console.log(nameArr.join('||')); //^ choice wise you have output


//^ concat
const fName = 'miraj'
const lName = 'hossen'
const age = 234

const fullName = fName + lName
const fullName0 = fName + ' ' + lName
const fullName1 = fName.concat(lName)
const fullName2 = fName.concat(' ').concat(lName)
const fullName3 = fName.concat(' ').concat(lName).concat(' ').concat(age)

// console.log(fullName);
// console.log(fullName0);
// console.log(fullName1);
// console.log(fullName2);
// console.log(fullName3);



//^ includes
const fruit = 'apple'
// console.log(fruit);
// console.log(fruit.includes());
// console.log(fruit.includes('pp'));
