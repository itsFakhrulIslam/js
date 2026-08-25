document.getElementById('moneyAdd').addEventListener('click', function () {
    // console.log('money add clicked');
    document.getElementById('cash').style.display = 'none'
    document.getElementById('add').style.display = 'block'

})

document.getElementById('moneyCash').addEventListener('click', function () {
    // console.log('money cash clicked');
    document.getElementById('add').style.display = 'none'
    document.getElementById('cash').style.display = 'block'

})

document.getElementById('moneyTransfer').addEventListener('click', function () {
    console.log('money transfer clicked');
    alert('we are in transfer money page')
})
document.getElementById('moneyBonus').addEventListener('click', function () {
    console.log('money bonus clicked');
    alert('we are in bonus money page')
})
document.getElementById('moneyPay').addEventListener('click', function () {
    console.log('money pay clicked');
    alert('we are in pay money page')
})
document.getElementById('moneyTransact').addEventListener('click', function () {
    console.log('money transaction clicked');
    alert('we are in transaction money page')
})




const logoutBtn = document.getElementById('logoutBtn')
console.log(logoutBtn);
logoutBtn.addEventListener('click', function () {

    confirm('yes')
    window.location.href = "./index.html"
})