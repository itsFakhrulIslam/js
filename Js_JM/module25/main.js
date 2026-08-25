console.log('main js file connected');

//^ 25.1 no video


//^ 25.2 no video
// first way
function bgColorChange() {
    document.body.style.backgroundColor = 'green'
    console.log('bg changed by click event');
}
function bgColorChange1() {
    document.body.style.backgroundColor = 'pink'
    console.log('bg changed by click event1');
}
function bgColorChange2() {
    document.body.style.backgroundColor = 'gray'
    console.log('bg changed by click event2');
}
function bgColorChange3() {
    document.body.style.backgroundColor = 'blue'
    console.log('bg changed by click event3');
}

// own practice
const colors = ['yellow', 'green', 'blue', 'purple', 'grey'];
let currentIndex = 0; // বর্তমানে কোন কালার আছে তার হিসাব রাখার জন্য

function changeColorBg() {
    // বর্তমান ইনডেক্স অনুযায়ী কালার সেট করা
    document.body.style.backgroundColor = colors[currentIndex];

    console.log(currentIndex);

    // ইনডেক্স ১ করে বাড়ানো যাতে পরের ক্লিকে পরের কালার আসে
    currentIndex++;

    // যদি অ্যারের শেষে চলে যায়, তবে আবার শুরুতে (০) ফেরত আসা
    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}

// second way
const make_color_red = document.getElementById('makeColorRed')
// console.log(make_color_red);

// another way
make_color_red.onclick = function () {
    document.body.style.backgroundColor = 'red'
    console.log('btn clicked');
}

// another way
// make_color_red.onclick = function makeColorRedFunc() {
//     document.body.style.backgroundColor = 'red'
//     console.log('btn clicked');
// }

// another way 
// make_color_red.onclick = makeColorRedFunc
// function makeColorRedFunc() {
//     document.body.style.backgroundColor = 'red'
// }

//^ 25.3 no video
//* handle event by add event lister

const addHandleEvent = document.getElementById('addEvent')
// console.log(addHandleEvent);

// structure of add event listener (element.addEventListener('event type',handlerFunction(){}))
// addHandleEvent.addEventListener('click', function name(params) {
//     document.body.style.backgroundColor = 'black'
// })
addHandleEvent.addEventListener('mouseover', function name(params) {
    console.log('mouse over...');

    document.body.style.backgroundColor = 'black'
})

addHandleEvent.addEventListener('mouseout', function name(params) {
    document.body.style.backgroundColor = 'white'
})


//^ 25.4 no video
// big way 
const head_title = document.getElementById('headTitle')
console.log(head_title);

const btn_title = document.getElementById('btnTitle')
console.log(btn_title);

btn_title.addEventListener('click', function () {
    const head_title = document.getElementById('headTitle')
    head_title.innerText = 'hello js dom learners'
})

// short way
document.getElementById('btnId')
    .addEventListener('click', function () {
        document.getElementById('paraId').innerText = 'User Login successfully'
    })


//^ input field and show name or title input field to
//* get the btn event listener
const btnInput = document.getElementById("btnInput")
btnInput.addEventListener("click", function () {
    console.log("update input btn click");

    //* get the text to the input field
    const inputElement = document.getElementById("input_name");
    console.log(inputElement);
    const inputName = inputElement.value;
    console.log(inputName);

    //* set the name of input title
    const namePara = document.getElementById("inputPara");
    namePara.innerText = inputName;
});


//^ 25.5 no video
// comment box project
document
    .getElementById("postCommentBtn")
    .addEventListener("click", function () {
        console.log("post comment btn click");

        // step-2:
        const writtenComment = document.getElementById("postCommentTextArea");
        // console.log(writtenComment);
        const writtenCommentValue = writtenComment.value;
        console.log(writtenCommentValue);

        // step-3: get the parent nod where the publish comment
        const postContainer = document.getElementById("postContainer");
        console.log(postContainer);

        // step-4: create a p tag fot set the inner text / text area comment
        const createPara = document.createElement("p");
        console.log(createPara);
        createPara.innerText = writtenCommentValue;
        createPara.classList.add("comment");

        // step-5: add to post list
        postContainer.appendChild(createPara);

        // step-6: text area must be clean, when comment post to the comment list.
        writtenComment.value = "";
    });


//^ 25.6 no video
// document.getElementById('keyInput').addEventListener('keydown', function (event) {
//     console.log('key down', event.target.value);
// })
// document.getElementById('keyInput').addEventListener('keyup', function (event) {
//     console.log('key up', event.target.value);
// })
// document.getElementById('keyInput').addEventListener('keypress', function (event) {
//     console.log('key press', event.target.value);
// })

document.getElementById('keyInput').addEventListener('keyup', function (event) {
    const eventValue = event.target.value
    console.log('key press', eventValue);
    const keyBtn = document.getElementById('keyDelete')
    console.log(keyBtn);

    if (eventValue === 'delete' || eventValue === 'Delete') {
        console.log('if trigger');
        keyBtn.removeAttribute('disabled')
        document.getElementById('keyHead').style.color = 'red'
        keyBtn.addEventListener('click', function () {
            document.getElementById('keyHead').style.display = 'none'
        })
    } else {
        console.log('else');
        keyBtn.setAttribute('disabled', true)
        document.getElementById('keyHead').style.color = ''
    }
})