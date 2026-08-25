console.log('cash out connected');

document.getElementById('withdrawBtn').addEventListener('click', function (event) {
    // console.log('withdrawBtn money');
    event.preventDefault()

    const amount = parseInt(document.getElementById('withdrawAmount').value)
    console.log(amount);

    const currentBalance = parseInt(document.getElementById('mainAmount').innerText)
    console.log(currentBalance);

    const currentUpdateBalance = currentBalance - amount
    console.log(currentUpdateBalance);

    document.getElementById('mainAmount').innerText = currentUpdateBalance

})