console.log('file added');

// ^
document.getElementById('Btn').addEventListener('click', () => {
    console.log('clicked');

    // *set items
    const inputKeys = document.getElementById('inputKey')
    const getDataKye = inputKeys.value
    inputKeys.value = '';
    // console.log(inputKeys);
    // console.log(getDataKye);

    const inputValue = document.getElementById('inputValue')
    const getDataValue = inputValue.value
    inputValue.value = '';
    // console.log(inputValue);
    // console.log(getDataValue);

    localStorage.setItem(getDataKye, getDataValue)

    // *set object
    // const dataObj = {inputKeys, inputValue}
    const dataObj = { getDataKye, getDataValue }
    // console.log(dataObj);

    const jsonData = JSON.stringify(dataObj)
    // console.log(jsonData);

    localStorage.setItem('data', jsonData)

    // *get object
    const getItem =localStorage.getItem('data')
    console.log(getItem);
})

document.getElementById('clearAll').addEventListener('click',()=>{
    localStorage.clear()
})