//^ basic break of the loops
//* break by for loop
for (i = 0; i <= 10; i++) {
    // console.log(i);

    if (i >= 3) {
        break
    }
}

//* break by while loop
let num = 0
while (num < 10) {
    // console.log(num);

    num++

    if (num > 5) {
        break
    }
}



//^ basic continue of the loops
for (let num = 0; num < 10; num++) {
    
    if (num % 2 == 0) {
        continue
    }
    console.log(num);
}

for (let num = 0; num < 10; num++) {
    
    if (num % 2 !== 0) {
        continue
    }
    console.log(num);
}