//! arrays
/**
 * property
 *      length
 * methods
 *      push()
 *      pop()
 *      unshift()
 *      shift()
 *      splice()
 */
let nameLists = ["miraj", "siraj", "riyaj", "rinam"];
console.log(nameLists);

// property
console.log(nameLists.length);

// methods
nameLists.push("labib");
nameLists.push("adiba");
console.log(nameLists);

nameLists.pop();
console.log(nameLists);

nameLists.unshift("ma");
nameLists.unshift("baba");
console.log(nameLists);

nameLists.shift();
console.log(nameLists);

// nameLists.splice(2, 2, "sister");
// nameLists.splice(2, 2, "brother");
nameLists.splice(2, 0, "brother");
console.log(nameLists);
