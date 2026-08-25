console.log('shared code connected');

//^ for input field only number value(string to number) convert
function getInputValueNumber(id) {
    //^ 1
    // const inputField = document.getElementById(id);
    // const inputFieldValue = inputField.value;
    // const inputFieldValueNumber = parseInt(inputFieldValue);

    //^ 2
    const inputFieldValueNumber = parseInt(
        document.getElementById(id).value,
    );

    return inputFieldValueNumber;
}

//^ for input field only value(string/number)
function getInputValue(id) {
    //^ 1
    // const inputField = document.getElementById(id);
    // const inputFieldValue = inputField.value;

    //^ 2
    const inputFieldValueNumber = document.getElementById(id).value

    return inputFieldValueNumber;
}

//^ for innerText value(text)
function getInnerText(id) {
    //^ 1
    // const textField = document.getElementById(id);
    // const textFieldValue = textField.innerText;

    //^ 2
    const textFieldValue = document.getElementById(id).innerText

    return textFieldValue;
}

//^ for get innerText value(number)
function getInnerText(id) {
    //^ 1
    // const textField = document.getElementById(id);
    // const textFieldValue = textField.innerText;
    // const textFieldValueNumber = parseInt(textFieldValue)

    //^ 2
    const textFieldValueNumber = parseInt(document.getElementById(id).innerText)

    return textFieldValueNumber;
}

//^ for set innerText value(number)
function setInnerText(values) {
    const availableBalance = document.getElementById('mainAmount')
    availableBalance.innerText = values
}