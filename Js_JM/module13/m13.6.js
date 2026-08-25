/**
 *& A JavaScript variable can hold 8 types of data.
 *^ primitive
 ** 1. numeric
        number
        bigint ❌
 ** 2. non numeric
        string
        boolean
        null
        undefined
        symbol ❌
 *^ Objects
    object
    array
    function
    date ❌
    RegEx ❌
    set
    map

❌ not know at this moment

 ** typeof operator used by checking data types

 */

var age = 23; //^ 23
console.log(age);
console.log(typeof age); //^ number

var name = 'hello' //^ hello
console.log(name);
console.log(typeof name); //^ string

var isHeMan = true //^ true
console.log(isHeMan);
console.log(typeof isHeMan); //^ boolean

var isNull = null //^ null
console.log(isNull);
console.log(typeof isNull); //^ object

var self; //^ undefined
console.log(self);
console.log(typeof self); //^ undefined

var personObject = {
    name: 'miraj',
    age: 24,
    isMale: true,
    city: 'narayanganj'
}
console.log(personObject);
console.log(typeof personObject);

var numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(typeof numbers);

function greet() {
    return 'hello'
}
console.log(greet());
console.log(typeof greet());

