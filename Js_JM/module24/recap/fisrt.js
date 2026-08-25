console.log('first js connected');

//! all section get to html file by "getElementsByTagName" 
//* access all element
const allSection = document.getElementsByTagName('section')
// console.log(allSection);

//^ id get by "getElementById"
//* access element
const headingId = document.getElementById('services')
console.log(headingId);
console.log(headingId.childNodes);


//* access to element text
// console.log(headingId.innerText);
// console.log(headingId.textContent);
// console.log(headingId.innerHTML);

//* change to element text direct in documents
// headingId.innerText = 'hello innerText'
// headingId.textContent = 'hello textContent'

// headingId.innerHTML = 'hello innerHTML'
// headingId.innerHTML = `
// <h1>Inner HTML Heading</h1>
// <p>lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,</p>
// <ul>
//     <li>list item one</li>
//     <li>list item tow</li>
//     <li>list item three</li>
// </ul>
// `


//! all class get to html file by "getElementsByClassName" 
const allClass = document.getElementsByClassName('section-item')
// console.log(allClass);
