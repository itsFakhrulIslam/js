// const person = {
//   fullName: "miraj",
//   age: 20,
//   city: "dhaka",
// };

// console.log(person);

// // for of
// for (const element in person) {
//     console.log(`${element}: ${person[element]} `);
// }

// let student = {
//   name: "Rahim",
//   id: 102,
//   marks: {
//     bangla: 75,
//     english: 82,
//     math: 90,
//   },
// };

// let totalMarks = 0;
// let totalSbjct = 0;

// for (const sbjct in student.marks) {
//   totalMarks += student.marks[sbjct];
//   totalSbjct++;
// }

// let avg = (totalMarks / totalSbjct).toFixed(2);

// if (avg >= 80) {
//   console.log("Passed with distinction. got ", avg, "%");
// } else {
//   console.log("Fail koreche porashunai focus dite hobe");
// }

// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore
let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Socks", price: 150, quantity: 3 },
];

// console.log(cart);

// for of
for (const element of cart) {
  console.log(element);
  for (const items of cart[element]) {
    console.log(items);
  }
}
