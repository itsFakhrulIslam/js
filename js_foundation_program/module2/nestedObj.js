// ! nested objects or array
/**
 *
 */

const student = {
  fullName: "miraj hossen",
  age: 24,
  id: 101,
  location: {
    city: "dhaka",
    street: "digubabur bazar",
    "post code": 1400,
  },
  isMale: true,
  say: () => {
    console.log("hello");
  },
};

console.log(student);
console.log(student.fullName);
console.log(student.location["post code"]);
console.log(student["location"]["street"]);
console.log(student.say());

const students = [
  {
    name: "miraj",
    id: 101,
  },
  {
    name: "siraj",
    id: 102,
  },
  {
    name: "riyaj",
    id: 103,
  },
];
console.log(students);
console.log(students[1].name);
console.log(students[1]['name']);