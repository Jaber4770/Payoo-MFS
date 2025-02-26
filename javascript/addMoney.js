document.getElementById('addMoney').addEventListener("click", function (e) {
    const filled = document.getElementById("addMoney");
    filled.style.backgroundColor = "#0874f2"; 
    
    e.preventDefault();
    window.location.href = 'addMoney.html';
    

});

document.getElementById("addMoneyBtn").addEventListener("click", function () {
    const mainBalance1 = document.getElementById("mainBalance");
    const mainBalance = parseFloat(mainBalance1.innerText);
    const amountToBeAdd = parseFloat(document.getElementById("amount").value);
    const pin = parseFloat(document.getElementById("pin").value);

    if (pin === 1234) {
        const newBalance = mainBalance + amountToBeAdd;
        mainBalance1.innerText = newBalance;
    }
    else{
        alert("You have enter wrong PIN");
    }
})