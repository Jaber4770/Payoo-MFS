document.getElementById('transferMoney').addEventListener("click", function(e){
    // e.preventDefault();
    window.location.href='transferMoney.html';

})

document.getElementById("transferMoneyBtn").addEventListener("click", function () {
    const mainBalance1 = document.getElementById("mainBalance");
    const mainBalance = parseFloat(mainBalance1.innerText);
    const amountToBewithdraw = parseFloat(document.getElementById("amount").value);
    const pin = parseFloat(document.getElementById("pin").value);

    if (pin === 1234) {
        const newBalance = mainBalance - amountToBewithdraw;
        mainBalance1.innerText = newBalance;
    }
    else{
        alert("You have enter wrong PIN");
    }
})