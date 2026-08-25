console.log('home js connected');

const pin = 1234

//^ 1
document.getElementById('addMoneyBtn').addEventListener('click', function (event) {
    console.log('added money');
    event.preventDefault()

    //^ 2. get all input info
    const bankName = document.getElementById('bankName')
    const accountNumber = document.getElementById('accountNumber')
    const addAmount = document.getElementById('addAmount')
    const enterPin = document.getElementById('enterPin')
    // console.log(bankName, accountNumber, addAmount, enterPin);

    //^ 3. get all input values
    const bankNameValue = bankName.value
    const accountNumberValue = accountNumber.value
    const addAmountValue = addAmount.value
    const enterPinValue = enterPin.value
    // console.log(bankNameValue, accountNumberValue, addAmountValue, enterPinValue);

    //^ 4. convert string value to number for amount
    const addAmountValueNumber = parseInt(addAmountValue)
    // console.log(addAmountValueNumber);
    const enterPinValueNumber = parseInt(enterPinValue)
    // console.log(enterPinValueNumber);


    //^ 5. get available balance
    const currentBalance = document.getElementById('mainAmount')
    // console.log(currentBalance);

    const currentBalanceInfo = currentBalance.innerText
    console.log(currentBalanceInfo);

    const currentBalanceInfoNumber = parseInt(currentBalanceInfo)
    console.log(currentBalanceInfoNumber);

    //^ 6. verify account number valid or not

    if (accountNumberValue.length < 11) {
        alert('please provide valid account number')
        return
    }

    if (pin !== enterPinValueNumber) {
        alert('please provide valid pin')
        return
    }

    const addBalance = currentBalanceInfoNumber + addAmountValueNumber
    console.log(addBalance);

    currentBalance.innerText = addBalance

})