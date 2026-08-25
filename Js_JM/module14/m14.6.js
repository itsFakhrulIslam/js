//! multi lavel if, if else, else

let marks = 2;
if (marks > 100 || marks < 0) {
  console.log("Invalid Number! Please enter a number between 0 and 100.");
}else if (marks >= 80) {
  console.log("you got a+");
} else if (marks >= 70) {
  console.log("you got a");
} else if (marks >= 60) {
  console.log("you got b");
} else if (marks >= 50) {
  console.log("you got b-");
} else if (marks >= 40) {
  console.log("you got c");
} else if (marks >= 33) {
  console.log("you got d");
} else{
  console.log("You got F. Better luck next time!");
}