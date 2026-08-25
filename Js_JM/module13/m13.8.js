/**
 *! types conversion
 ** 1. Converting Strings to Numbers
 ** 2. Converting Numbers to Strings
 ** 3. Converting Dates to Numbers
 ** 4. Converting Numbers to Dates
 ** 5. Converting Booleans to Numbers
 ** 6. Converting Numbers to Booleans 
 */

//& Type Conversion (Automatic) - কম্পাইলার নিজে করে

//^ এখানে JavaScript 3 কে string এ convert করে দিয়েছে
let result = "5" + 3;
console.log(result);        // "53" (string)
console.log(typeof result); // string

//^ এখানে JavaScript "10" কে number এ convert করে দিয়েছে
let result0 = "10" - 5;
console.log(result0);        // 5 (number)
console.log(typeof result0); // number

//^ true = 1, false = 0 - এটা JS নিজে বুঝে নেয়
let result1 = 5 + true;
console.log(result1);        // 6 (number)

//^ auto-metic widening (Widening Casting ছোট ডেটা টাইপ থেকে বড় ডেটা টাইপে রূপান্তরের জন্য ব্যবহার করা হয়। এটি স্বয়ংক্রিয়ভাবে ঘটে এবং কোনো তথ্যের ক্ষতি হয় না) 
let num = 42.05;           // integer
let floatNum = parseFloat(num);     // automatically works
console.log(floatNum);  // 42 - কোনো সমস্যা নেই



//& Type Casting/customization (Manual) - প্রোগ্রামার নিজে করে

//^ string to number customization
let str = "123";
let num0 = Number(str);     // ম্যানুয়াল কাস্টিং
console.log(num0);          // 123 (number)
console.log(typeof num0);   // number
// অথবা
let num2 = parseInt("123.45");  // 123
let num3 = parseFloat("123.45"); // 123.45

//^ number to string 
let num1 = 123;
let str0 = String(num1);     // ম্যানুয়াল কাস্টিং
console.log(str0);           // "123" (string)
console.log(typeof str0);    // string
// অথবা
let str2 = num1.toString();  // আরেক উপায়
let str3 = num1 + "";        // এটাও কাজ করে

//^ Narrowing Conversion (বড় থেকে ছোটে - ডেটা লস হয়)
let bigNum = 123.456;
let smallNum = parseInt(bigNum);   // narrowing - দশমিক কেটে যায়
console.log(smallNum);             // 123 (ডেটা লস হয়েছে)

let floatNum0 = 123.99;
let intNum = parseInt(floatNum0);
console.log(intNum);               // 123 (0.99 লস হয়ে গেছে)

//^ Boolean to Number
let bool = true;
let numFromBool = Number(bool);
console.log(numFromBool);    // 1

//^ Boolean to String
let strFromBool = String(bool);
console.log(strFromBool);    // "true"



//& গুরুত্বপূর্ণ পার্থক্য উদাহরণ সহ:
//* Automatic Type Conversion (JS নিজে করে):
// JS নিজে থেকেই বোঝে
console.log("5" - 2);     // 3 (string automatic number হয়ে গেল)
console.log("5" + 2);     // "52" (number automatic string হয়ে গেল)
console.log("5" * "2");   // 10 (দুটোই number হয়ে গেল)

//* Manual Type Casting (আমরা নিজে করি):
// আমরা জোর করে কাস্টিং করছি
let strr = "123";
let numm = Number(str);     // আমরা নিজে কাস্টিং করলাম
console.log(numm + 100);    // 223 (এখন number হিসাবে কাজ করবে)

let num22 = 456;
let str22 = String(num22);   // আমরা নিজে কাস্টিং করলাম
console.log(str22 + "abc"); // "456abc"