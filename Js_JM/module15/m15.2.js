//^ while loop
let number = 0
while (number < 5) {
    console.log(number);
    number++
}



let str = "Hello";
let i = 0; // Initialize index

while (i < str.length) {
    console.log(str[i]); // Access character at index i
    i++; // Increment to avoid infinite loop
}
