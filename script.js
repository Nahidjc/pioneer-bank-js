var btn = document.getElementById('button');
btn.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("form-portion").style.display = "none";
    document.getElementById("second-part").style.display = "block";
    console.log("Clicked");
})


document.getElementById("deposit-btn").addEventListener('click', function () {
    // let currentDeposit = document.getElementById("deposit-amount");
    let currentDeposit = getInputNumber("deposit-amount");
    setSpanText("deposit-balance", currentDeposit);
    // let Balance = document.getElementById('total-balance').innerText;
    // let integerBalance = parseInt(Balance);
    // TotalBalance = depositBalance + integerBalance;
    // document.getElementById('total-balance').innerText = TotalBalance;
    // let totalDeposit = document.getElementById("deposit-balance").innerText;
    // integerDeposit = parseInt(totalDeposit) + depositBalance;
    // document.getElementById("deposit-balance").innerText = integerDeposit;
    currentDeposit.value = '';
})

function getInputNumber(id) {
    amount = document.getElementById(id).value;
    document.getElementById(id).value = '';
    return parseInt(amount)

}


function getIntegerNumber(id) {
    amount = document.getElementById(id).innerText;
    return parseInt(amount)
}

function setSpanText(id, amount) {
    let Balance = getIntegerNumber("total-balance");
    if (amount < 0 && (-1 * amount) > Balance) {

    } else {

        TotalBalance = Balance + amount;
        document.getElementById('total-balance').innerText = TotalBalance;
        integerDeposit = getIntegerNumber(id) + Math.abs(amount);
        document.getElementById(id).innerText = integerDeposit;


    }


}


document.getElementById("withdraw-btn").addEventListener('click', function () {
    // let currentWithdraw = document.getElementById("withdraw-amount");
    currentWithdraw = getInputNumber("withdraw-amount")
    setSpanText("withdraw-balance", -1 * currentWithdraw);
    // let Balance = document.getElementById('total-balance').innerText;
    // let integerBalance = parseInt(Balance);
    // let totalWithdraw = document.getElementById('withdraw-balance').innerText;
    // let integerWithdraw = parseInt(totalWithdraw);
    // if (integerBalance > withdrawBalance) {
    //     totalBalance = integerBalance - withdrawBalance;
    //     totalWithdraw = integerWithdraw + withdrawBalance;
    //     document.getElementById('total-balance').innerText = totalBalance;
    //     document.getElementById('withdraw-balance').innerText = totalWithdraw;
    //     console.log(totalBalance);
    // }
    currentWithdraw.value = '';

})