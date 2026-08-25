//^ topic of the JSON(javascript object notation)
/**
 * 1. JSON.stringify(objectName)
 * 2. JSON.parse(jsonObjectName)
 */

//^
const person = {
    name: 'miraj',
    age: 24,
    city: 'narayanganj'
}
console.log(person);

// 
const personJson = JSON.stringify(person)
console.log(personJson);

// 
const parseJsonData = JSON.parse(personJson)
console.log(parseJsonData);
