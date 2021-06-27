var btn = document.getElementById('button');
btn.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("form-portion").style.display = "none";
    document.getElementById("second-part").style.display = "block";
    console.log("Clicked");
})


document.getElementById("deposit-btn").addEventListener('click', function () {
    let currentDeposit = document.getElementById("deposit-amount");
    let depositBalance = parseInt(currentDeposit.value);
    let Balance = document.getElementById('total-balance').innerText;
    let integerBalance = parseInt(Balance.replace(/\$|,/g, ''));
    TotalBalance = depositBalance + integerBalance;
    document.getElementById('total-balance').innerText = '$' + TotalBalance;
    let totalDeposit = document.getElementById("deposit-balance").innerText.replace(/\$|,/g, '');
    integerDeposit = parseInt(totalDeposit) + depositBalance;
    document.getElementById("deposit-balance").innerText = '$' + integerDeposit;
    currentDeposit.value = '';
})



document.getElementById("withdraw-btn").addEventListener('click', function () {
    let currentWithdraw = document.getElementById("withdraw-amount");
    withdrawBalance = parseInt(currentWithdraw.value);
    let Balance = document.getElementById('total-balance').innerText;
    let integerBalance = parseInt(Balance.replace(/\$|,/g, ''));
    let totalWithdraw = document.getElementById('withdraw-balance').innerText;
    let integerWithdraw = parseInt(totalWithdraw.replace(/\$|,/g, ''));
    if (integerBalance > withdrawBalance) {
        totalBalance = integerBalance - withdrawBalance;
        totalWithdraw = integerWithdraw + withdrawBalance;
        document.getElementById('total-balance').innerText = '$' + totalBalance;
        document.getElementById('withdraw-balance').innerText = '$' + totalWithdraw;
        console.log(totalBalance);
    }
    currentWithdraw.value = '';

})