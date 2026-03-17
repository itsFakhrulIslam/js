//! array push = add to last position

let numSet = [1, 2, 3, 4] //ans 1 2 3 4
numSet.push(5)//single push //ans 1, 2, 3, 4, 5
// console.log(numSet);

let numSet1 = [1, 2, 3, 4] //ans 1 2 3 4
numSet.push(5, 6, 7)//multiple push //ans 1, 2, 3, 4, 5, 6, 7
// console.log(numSet1);

let luckyFamily = ['apo', 'vai', 'labib']
luckyFamily.push('adiba')
// console.log(luckyFamily);


//! array pop = remove to last position

let familyMem = ['vai', 'bon', 'ma', 'baba']
// console.log(familyMem); // vai bon ma baba 
familyMem.pop() // vai bon ma
// console.log(familyMem)


//! array unshift = add to first position
let famMem = ['baba', 'vai', 'bon']
// console.log(famMem);
famMem.unshift('ma') // ma add
// console.log(famMem);


//! array shift = remove to first position
let famMem1 = ['baba', 'ma', 'vai', 'bon']
// console.log(famMem1);
famMem1.shift() // baba remove
// console.log(famMem1);