//^ topic of the array forEach
/**
 * 1. forEach(no value return but console)
 * 2. filter(conditionally matched return value)
 * 3. find(first element return)
 * 4. map(every single value return)
 */

//^
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) => {
  console.log(number * index);
});
