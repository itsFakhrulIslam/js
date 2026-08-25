//! for loop
/**
 *^ previous topic while loop
    let num = 0
    while(num<5){
        console.log(num);
        num++
    }
 ** while loop anatomy
    let num = 0: its called "loop variable"
    white(num < 5): its called "loop condition"
        console.log(num): its loop statement or code execution phase

        num++: loop increment
 */

/**
 *^ for loop structure
 **  for(loop variable; loop condition; loop increment ){
 **      loop statement or code execution phase
 ** }
 * 
 */

for (let i = 0; i < 5; i++) {
    // console.log(i);
}


//^ simply print odd-even number
//* print even number
for (let i = 0; i < 20; i += 2) {
    // console.log(i);
}

//* print even number
for (let i = 1; i < 20; i += 2) {
    // console.log(i);
}


//^ conditionally print odd-even number
//* even
for (let i = 0; i < 20; i++) {
    // console.log(i);

    if (i % 2 == 0) {
        // console.log('even number:', i);
    }
}

//* odd
for (let i = 0; i < 20; i++) {
    // console.log(i);

    if (i % 2 == 1) {
        // console.log('odd number:', i);
    }
}
