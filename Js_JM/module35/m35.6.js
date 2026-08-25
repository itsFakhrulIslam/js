// ^topic of truthy and falsy value
/**
*^ 1. falsy value
**      1. false: সরাসরি বুলিয়ান false।
**      2. 0: পজিটিভ শূন্য।
**      3. -0: নেগেটিভ শূন্য।
**      4. 0n: BigInt ফরম্যাটের শূন্য।
**      5. "": খালি স্ট্রিং (Empty string)।
**      6. null: কোনো ভ্যালু নেই বা খালি।
**      7. undefined: ভ্যালু ডিফাইন করা হয়নি এমন।
**      8. NaN: Not a Number (গাণিতিক ভুলের ফলাফল)।
*^ 2. truthy value
**      1. true: সরাসরি বুলিয়ান true।
**      2. যেকোনো সংখ্যা (০ এবং -০ বাদে): যেমন 1, -10, 3.14 ইত্যাদি।
**      3. "0": স্ট্রিংয়ের ভেতরে থাকা শূন্য (এটি একটি নন-এম্পটি স্ট্রিং)।
**      4. "false": স্ট্রিংয়ের ভেতরে থাকা false।
**      5. " ": শুধু স্পেস থাকলেও সেটি Truthy (নন-এম্পটি স্ট্রিং)।
**      6. []: খালি অ্যারে (Empty Array)।
**      7. {}: খালি অবজেক্ট (Empty Object)।
**      8. Infinity এবং -Infinity: গাণিতিক ইনফিনিটি ভ্যালু।
**      9. যেকোনো ফাংশন: যেমন function() {} বা অ্যারো ফাংশন।
**      10. new Date(): যেকোনো অবজেক্ট ইনস্ট্যান্স।

*! জাভাস্ক্রিপ্টে মাত্র ৮টি Falsy Value আছে (যা আমি আগে লিস্টে দিয়েছিলাম)। ওই ৮টি বাদ দিয়ে পৃথিবীতে আর যা কিছু আছে—সবই Truthy Value।
*/

//^
const TrueFalseValueCheck = ''

if (TrueFalseValueCheck) {
    // console.log('its truthy');
} else {
    // console.log('its falsy');
}

// TrueFalseValueChepck ? console.log('its truthy') : console.log('its falsy')

//^ 
let age = 33

const result = (age >= 18 && age < 30) ? 'your are eligible' : 'you are not eligible'
// console.log(result);


// ^
const isActive = true
// console.log(!isActive);

const showUser = () => {
    console.log('green');
}

const hideUser = () => {
    console.log('grey');
}

// 
// isActive ? showUser() : hideUser()

// 
// isActive && showUser()

// 
// isActive || hideUser()
