// scope
/**
 * js scope
 * global scope 
 * local scope
 * func scope
 * block scope
 */

// global scope
let age;

// block scope
{
    let age = 30
}

// functioin scope
function interview() {
  age = 24
}
interview()

console.log(age);