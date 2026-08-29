console.log("connects");

// get element by id
// let taskInput = document.getElementById("taskInput");
// let addBtn = document.getElementById("addBtn");
// let taskList = document.getElementById("taskList");
// console.log(taskInput, addBtn, taskList);

// query selector
let taskInputs = document.querySelector("#taskInput");
let addBtns = document.querySelector("#addBtn");
let taskLists = document.querySelector("#taskList");
// console.log(taskInputs, addBtns, taskLists);

// addBtns.addEventListener("click", () => {
//   console.log("btn clicked", taskInputs.value);
// });

// taskInputs.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });

// taskInputs.addEventListener("keydown", (e) => {
//   if (e.key === "enter" || e.key === "Enter") {
//     console.log("enter press", e.target.value);
//   }
// });

// make elements
// let liElements = document.createElement('li')
// console.log(liElements);
// liElements.innerText = 'hello world'
// taskLists.appendChild(liElements)

// addBtns.addEventListener("click", () => {
//   let makeLi = document.createElement("li");
//   makeLi.textContent = taskInputs.value;
//   taskLists.appendChild(makeLi);

//   taskInputs.value = "";
// });

addBtns.addEventListener("click", () => {
  let span = document.createElement("span");
  span.textContent = taskInputs.value;

  let li = document.createElement("li");

  let doneEle = document.createElement("button");
  doneEle.textContent = "✅";

  let dletEle = document.createElement("button");
  dletEle.textContent = "❌";

  li.appendChild(span);
  li.appendChild(doneEle);
  li.appendChild(dletEle);

  taskLists.appendChild(li);

  taskInputs.value = "";
});
