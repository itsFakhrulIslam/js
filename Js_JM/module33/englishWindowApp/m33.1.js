console.log('window🪟 file loaded...');

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
  fetch('https://openapi.programming-hero.com/api/levels/all') //return promise of response
    .then(response => response.json()) //return promise of json data
    .then(data => {

      //for result checking
      console.log(data) //for fetched data by fetch()
      console.log(data.status) //for status check
      console.log(data.message) //for status message check
      console.log(data.data) //for array of object check

      //for result checking
      displayLessons(data.data)
    })
}
lessonLoadData()


/**
 * 1. get parent container to append card or data, then empty the container
 * 2. get into every lessons
 * 3. create element for every lessons
 * 4. added info into fetch data
 * 5. append/added the parent container
 */

const displayLessons = (lessons) => {
  console.log(lessons);

  //^1
  const getLevelContainer = document.getElementById('levelContainer')
  //console.log(getLevelContainer);
  getLevelContainer.innerHTML = ''

  //^2
  lessons.forEach(lesson => {
    //console.log(lesson);

    //^3
    const createDivElement = document.createElement('div')
    //console.log(createDivElement);
    
    //^4
    createDivElement.innerHTML = `
    <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lessons - ${lesson.level_no}</button>
    `
    console.log(createDivElement);

    //^5
    getLevelContainer.appendChild(createDivElement)
  });
}
//displayLessons()