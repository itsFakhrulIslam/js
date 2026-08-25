//! objects
/**
 * access/read
 *      . notation
 *      [] notation
 *
 * modification
 *      delete
 *      add
 *      modified
 *
 * read only keys/values/entries
 *      Object.keys(onjName)
 *      Object.values(onjName)
 *      Object.entries(onjName)
 */

const me = {
  name: "miraj",
  age: 22,
  isPolite: "so so..",
};
console.log(me);

//
console.log(me.name);
console.log(me["age"]);

//
delete me.isPolite;
console.log(me); //delete
me.address = "narayanganj";
console.log(me); //add
me.address = {
    city: "narayanganj",
  dristic: "narayanganj sadar",
};
console.log(me); //modification

//
const objKeys = Object.keys(me)
console.log(objKeys);
const objValues = Object.values(me)
console.log(objValues);
const objEntries = Object.entries(me)
console.log(objEntries);
