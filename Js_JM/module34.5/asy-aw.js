//^ topic of the async await
/**
 ** 1.
 ** 2.async await
 ** 3.try catch
 */

//^
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//*
// function printData() {
//     console.log('inside of func');

//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }
// printData()

//*
// function printData() {
//     console.log('inside of func');

//     console.log(1);
//     console.log(2);

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(jsonData => console.log(3))

//     console.log(4);
//     console.log(5);
// }
// printData()

//^
// async function printData() {
//     console.log('inside of func');

//     console.log(1);
//     console.log(2);

//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const jsonData = await res.json()
//     console.log(jsonData[0].name);

//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //         .then(res => res.json())
//     //         .then(jsonData => console.log(3))

//     console.log(4);
//     console.log(5);
// }
// printData()

//*
// const printData = async () => {
//     console.log('inside of func');

//     console.log(1);
//     console.log(2);

//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const jsonData = await res.json()
//     console.log(jsonData[0].name);

//     console.log(4);
//     console.log(5);
// }
// printData()

//^
const printData = async () => {
    console.log('inside of func');

    console.log(1);
    console.log(2);
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/userss')
        const jsonData = await res.json()
        console.log(jsonData.length);

    } catch (error) {
        console.log('error got it');
    }

    console.log(4);
    console.log(5);
}
printData()
