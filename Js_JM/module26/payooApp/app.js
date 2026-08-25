// console.log('app file connected...');

//^ 1. login button functionalities.
const loginBtn = document.getElementById('loginBtn')
// console.log(loginBtn);
loginBtn.addEventListener('click', function (event) {
    // console.log('login button clicked.');
    event.preventDefault()

    //^ 2. input value validation and input functionalities.
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const inputMobile = document.getElementById('inputMobile').value
    const inputPin = document.getElementById('inputPin').value
    // console.log(inputMobile, inputPin);
    // console.log(typeof inputMobile, typeof inputPin);

    //^ 3. input received value converting string to number
    const convertInputMobileValue = parseInt(inputMobile)
    const convertInputPinValue = parseInt(inputPin)
    // console.log(convertInputMobileValue, convertInputPinValue);

    //^ 4. now logically check user real or face
    if (convertInputMobileValue === mobileNumber && convertInputPinValue === pinNumber) {
        // console.log('your right');

        //^ 5. page redirection
        window.location.href = "./home.html"
    }
    else {
        alert('Invalid Credentials')
    }

})
