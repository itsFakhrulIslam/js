console.log("practice file connected");

// fetch data
const fetchDataLoad = () => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const commensUrl = "https://jsonplaceholder.typicode.com/comments";

  // use for users
  fetch(usersUrl)
    .then((response) => response.json())
    .then((jsonData) => displayUserData(jsonData));

  // use for comments
  fetch(commensUrl)
    .then((response) => response.json())
    .then((jsonData) => displayCommentData(jsonData));
};
fetchDataLoad();

// use for users
const displayUserData = (userData) => {
  console.log(userData);

  const getContainer = document.getElementById("usersContainer");
  console.log(getContainer);
  getContainer.innerHTML = "";

  userData.forEach((user) => {
    console.log(user);

    const createElement = document.createElement("div");
    //   console.log(createElement);

    createElement.innerHTML = `
        <div class="userCard">
      <h2>User Profile ${user.id}</h2>
      <h3><span class="span">Name:</span> ${user.name}</h3>
      <p><span class="span">UserName:</span> ${user.username}</p>
      <p><span class="span">Email:</span> ${user.email}</p>
      <address>
        <p><span class="span">Street:</span> ${user.address.street}</p>
        <p><span class="span">Suite:</span> ${user.address.suite}</p>
        <p><span class="span">City:</span> ${user.address.city}</p>
        <p>Zip <span class="span">Code:</span> ${user.address.zipcode}</p>
        <p>Geo Location-</p>
        <p><span class="span">lat:</span> ${user.address.geo.lat}</p>
        <p><span class="span">lng:</span> ${user.address.geo.lng}</p>
      </address>
      <p><span class="span">Phone:</span> ${user.phone}</p>
      <p><span class="span">Website:</span> ${user.website}</p>
      <h4>Company-</h4>
      <p><span class="span">Name:</span> ${user.company.name}</p>
      <p><span class="span">catchPhrase:</span> ${user.company.catchPhrase}</p>
      <p><span class="span">Bs:</span> ${user.company.bs}</p>
    </div>
    `;
    // console.log(createElement);

    getContainer.appendChild(createElement);
  });
};

// use for comments
const displayCommentData = (commentsData) => {
  console.log(commentsData);

  const getContainer = document.getElementById("commentsContainer");
  console.log(getContainer);
  getContainer.innerHTML = "";

  commentsData.forEach((comment) => {
    // console.log(comment);

    const createElement = document.createElement("div");
    //   console.log(createElement);

    createElement.innerHTML = `
        <div class="commentCard">
            <h2>Comments No. ${comment.id}</h2>
            <h3><span class="span">Commentors Name:</span> ${comment.name}</h3>
            <p><span class="span">Commentors Email:</span> ${comment.email}</p>
            <p><span class="span">Body:</span> ${comment.body}</p>
        </div>
    `;
    // console.log(createElement);

    getContainer.appendChild(createElement);
  });
};
