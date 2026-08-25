/**
 *! ternary operator: three parts
 *^ condintion ? true : false
 */

let age = 117;

//* if else version
if (age >= 18) {
  console.log("you are a voter");
} else {
  console.log("you are a ruhinga");
}

//* ternary version
age >= 18 ? console.log("you are a voter") : console.log("you are a ruhinga");

//! nested (advanced if else / ternary) version
if (age >= 18) {
  console.log("you are a voter");
  if (age) {
    console.log("lemme check your NID");
  }
} else {
  console.log("you are a ruhinga");
}

age >= 18
  ? age
    ? console.log("lemme check your NID")
    : console.log("")
  : console.log("you are a ruhinga");
