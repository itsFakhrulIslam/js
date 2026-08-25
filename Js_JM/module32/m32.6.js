console.log('file connected');

// fetch data
const fetchAllPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            displayPosts(data)
        })
}

// 
const displayPosts = (postsParam) => {
    // console.log(postsParam);

    //1 get the post list show container
    const postContainer = document.getElementById('postContainer')
    // console.log(postContainer);

    //2 empty the post list container
    postContainer.innerHTML = ''


    postsParam.forEach(post => {
        // //3 create a list show container
        // const listElement = document.createElement('li')

        // //4 set the info/objectData by innerText
        // listElement.innerText = post.title

        // //5 listElement to append inside of postListContainer
        // postContainer.appendChild(listElement)

        //3 create a post card
        const postCard = document.createElement('div')

        //4 set the info/objectData by innerHTML
        postCard.innerHTML = `
        <div class="postCard">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `

        //5 listElement to append inside of postListContainer
        postContainer.appendChild(postCard)
    });
}

// func invoke for automatic all post show
fetchAllPosts()