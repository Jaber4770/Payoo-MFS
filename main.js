document.getElementById("loginBtn").addEventListener("click", function () {
    const accountNumber = document.getElementById("accountNumber").value;
    const pinNumber = document.getElementById("PinNumber").value;

    if (accountNumber.length === 11 && accountNumber.startsWith("01")) {
        if (parseInt(pinNumber) === 123654) {
            window.location.href = "dashboard.html";
        }
        else {
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.innerText = "Wrong Pin Number!! Please use correct PIN number"
        }
    }
    else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "wrong account number"
    }


})