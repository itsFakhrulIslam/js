console.log("window🪟 file loaded...");

/**
 *^ all external links or resources here
 * <!-- font awesome cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- google font Poppins + Hind siliguri -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <!-- daisyui cdn -->
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@5"
      rel="stylesheet"
      type="text/css"
    />

    <!-- tailwind css cdn -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
 */

const lessonLoadData = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //return promise of response
    .then((response) => response.json()) //return promise of json data
    .then((data) => {
      //*for result checking
      // console.log(data) //* for fetched data by fetch()
      // console.log(data.status) //* for status check
      // console.log(data.message) //* for status message check
      // console.log(data.data) //* for array of object check

      //* for result checking
      displayLessons(data.data);
    });
};

/**
 * 1. get parent container to append card or data, then empty the container
 * 2. get into every lessons
 * 3. create element for every lessons
 * 4. added info into fetch data
 * 5. append/added the parent container
 */

const displayLessons = (lessons) => {
  // console.log(lessons);

  //^1
  const getLevelContainer = document.getElementById("levelContainer");
  //console.log(getLevelContainer);
  getLevelContainer.innerHTML = "";

  //^2
  lessons.forEach((lesson) => {
    //console.log(lesson);

    //^3
    const createDivElement = document.createElement("div");
    //console.log(createDivElement);

    //^4
    createDivElement.innerHTML = `
    <button
        id="lessonBtnId-${lesson.level_no}"
        onclick="levelWordLoadData(${lesson.level_no})"
        class="lessonBtnClass btn btn-outline btn-primary"
      >
        <i class="fa-solid fa-book-open"></i>Lessons - ${lesson.level_no}
      </button>
    `;
    // console.log(createDivElement);

    //^5
    getLevelContainer.appendChild(createDivElement);
  });
};

// those function are use for word
const levelWordLoadData = (id) => {
  // console.log(id);

  loadingManager(true);

  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //* for button active class remove
      removeActive();

      const levelBtn = document.getElementById(`lessonBtnId-${id}`);
      // console.log(levelBtn);
      levelBtn.classList.add("btn-active");

      displayLevelWord(data.data);
    });
};

const displayLevelWord = (words) => {
  // console.log(words);

  const getWordContainer = document.getElementById("wordContainer");
  // console.log(getWordContainer);
  getWordContainer.innerHTML = "";

  //^ special part
  if (words.length == 0) {
    getWordContainer.innerHTML = `
        <div
          class="col-span-full text-center rounded-xl py-10 space-y-5 fontBangla"
        >
          <img class="mx-auto" src="./assets/alert-error.png" alt="" />
          <p class="font-medium text-gray-500">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি,
          </p>
          <h1 class="text-3xl font-bold">
            নেক্সট Lesson এ যান...
          </h1>
        </div>
    `;

    loadingManager(false);
    return;
  }

  words.forEach((word) => {
    // console.log(word);

    const createWordCard = document.createElement("div");
    // console.log(createWordCard);
    createWordCard.innerHTML = `
        <div class="bg-white rounded-xl text-center py-10 px-5">
          <h2 class="text-2xl font-bold">${word.word ? word.word : "Not Found"}</h2>
          <p class="font-semibold mt-2">Meaning /Pronounciation</p>
          <div class="fontBangla text-2xl text-gray-500 font-medium mt-5">
            "${word.meaning ? word.meaning : "Not Found"} / ${word.pronunciation ? word.pronunciation : "Not Found"}"
          </div>

          <div class="flex justify-between items-center">
            <button onclick="loadWordDetails(${word.id})" class="btn bg-[#1a91ff30] hover:bg-[#1a91ff80]">
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button onclick="pronounceWord('${word.word}')" class="btn bg-[#1a91ff30] hover:bg-[#1a91ff80]">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </div>
        </div>
    `;
    getWordContainer.appendChild(createWordCard);
  });

  loadingManager(false);
};

// for buttons active and inactive
const removeActive = () => {
  const levelBtnClass = document.querySelectorAll(".lessonBtnClass");
  // console.log(levelBtnClass);

  for (const btn of levelBtnClass) {
    btn.classList.remove("btn-active");
  }
};

const loadWordDetails = async (wordDetailsId) => {
  // console.log(wordDetailsId);

  const url = `https://openapi.programming-hero.com/api/word/${wordDetailsId}`;

  const response = await fetch(url);

  const jsonData = await response.json();
  displayWordDetails(jsonData.data);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((jsonData) => my_modal_5.showModal(jsonData.data));
};

const displayWordDetails = (wordDetails) => {
  console.log(wordDetails);

  const getWordDetailsContainer = document.getElementById(
    "WordDetailsContainer",
  );
  console.log(getWordDetailsContainer);

  getWordDetailsContainer.innerHTML = `
  <div class="space-y-5">
            <div class="">
              <h2 class="text-2xl font-bold">
                ${wordDetails.word} (<i class="fa-solid fa-microphone-lines"></i> : ${wordDetails.pronunciation})
              </h2>
            </div>

            <div class="">
              <h2 class="font-bold">Meaning</h2>
              <p class="fontBangla">"${wordDetails.meaning}"</p>
            </div>

            <div class="">
              <h2 class="font-bold">Example</h2>
              <p>${wordDetails.sentence}</p>
            </div>

            <div class="">
              <h2 class="font-bold">Synonym</h2>

              <div class="">${createSynonymElement(wordDetails.synonyms)}</div>  
            </div>
          </div>
  `;

  document.getElementById("wordModal").showModal(wordDetails.data);
};

const createSynonymElement = (synonymsArray) => {
  // console.log(synonymsArray);

  const synonymsElement = synonymsArray.map(
    (element) => `<span class="btn">${element}</span>`,
  );
  // console.log(synonymsElement);

  return synonymsElement.join(" ");
};

const loadingManager = (status) => {
  if (status == true) {
    document.getElementById("loadingContainer").classList.remove("hidden");
    document.getElementById("wordContainer").classList.add("hidden");
  } else {
    document.getElementById("wordContainer").classList.remove("hidden");
    document.getElementById("loadingContainer").classList.add("hidden");
  }
};

lessonLoadData();

document.getElementById('searchBtn').addEventListener('click', function () {
  // console.log('clicked');

  removeActive()

  const inputValue = document.getElementById('searchInput').value
  const convertValue = inputValue.trim().toLowerCase()
  console.log(inputValue);
  console.log(convertValue);

  fetch('https://openapi.programming-hero.com/api/words/all')
    .then(res => res.json())
    .then(jsonData => {

      const allWords = jsonData.data
      // console.log(allWords);

      const filterWords = allWords.filter(word => word.word.toLowerCase().includes(convertValue))

      displayLevelWord(filterWords);
    })
})

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}