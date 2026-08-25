console.log("m32.7 is connected");

// fetch data
const fetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displyData(data));
};
fetchData();

const displyData = (todos) => {
  //   console.log(todos);

  const getContainer = document.getElementById("todosContainer");
  getContainer.innerHTML = "";
  //   console.log(getContainer);

  todos.forEach((todo) => {
    // console.log(todo);
    // ❌✅

    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <div class="todoCard">
        <h2>${todo.completed === true ? "✅" : "❌"}</h2>
        <p>
        ${todo.title}
        </p>
      </div>
    `;
    // console.log(createDiv);

    getContainer.appendChild(createDiv);
  });
};
