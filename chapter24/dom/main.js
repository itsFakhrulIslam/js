console.log("hello from JS");

//--------getElementsByTagName

let listItem = document.getElementsByTagName("li");
// console.log(listItem);

for (const element of listItem) {
  //   console.log(element.innerText);
}

//--------

let h1 = document.getElementsByTagName("h1");
// console.log(h1);

for (const element of h1) {
  //   console.log(element.innerHTML);
}

let para = document.getElementsByTagName("p");
// console.log(para);
for (const element of para) {
  // console.log(element.textContent);
}

//--------getElementById

let heading = document.getElementById("heading1");
// console.log(heading.textContent); //befor change value
heading.textContent = `I'm learning JS dom`;
// console.log(heading.textContent); //after changed values

//--------getElementsByClassName

let listItemClassName = document.getElementsByClassName("important-title");
// console.log(listItemClassName);
for (const element of listItemClassName) {
  //   console.log(element.textContent);
}

//--------querySelectorAll
let liTitle = document.querySelectorAll(".headTitle li"); //all element show
// console.log(liTitle);
liTitle.forEach((element) => {
  //   console.log(element.innerText);
});

// --------

let frTitle = document.querySelector("#fruitsTitle li"); //first element show
// console.log(frTitle);

// --------
let fruTitle = document.getElementById('fruitsTitle')
console.log(fruTitle); 
console.log(fruTitle.childNodes); //all child nodes
console.log(fruTitle.firstChild); //first child nodes


