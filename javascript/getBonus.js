document.getElementById('getBonus').addEventListener("click", function(e){
    e.preventDefault();
    window.location.href='getBonus.html';

})


document.getElementById("getBonusBtn").addEventListener("click", function () {
    const mainBalance1 = document.getElementById("mainBalance");
    const mainBalance = parseFloat(mainBalance1.innerText);
    const coupon = document.getElementById("coupon").value;
    console.log(coupon)

    if (coupon === "JackSargey") {
        const newBalance = mainBalance + 1000;
        mainBalance1.innerText = newBalance;
    }
    else{
        alert("You have enter wrong Coupon. Please enter 'JackSargey'");
    }
})