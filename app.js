// Login Function
const loginButton = document.getElementById("login");

loginButton.addEventListener('click', function(){
    const logArea = document.getElementById("login-area");
    logArea.style.display = "none";

    const transaction_area = document.getElementById("transaction-area")
    transaction_area.style.display = "block"
})

// Transaction Function
const depositButton = document.getElementById("dep");

depositButton.addEventListener('click', function(){
    //deposit input
    const deposit = document.getElementById("depValue");
    const depositValue = parseFloat(deposit.value);
    // console.log(depositValue);
    
    //deposit value set 

    const currentDep = document.getElementById("currentDep");
    const currentDepositValue = parseFloat(currentDep.innerText);
    
    const totalDeposit = depositValue + currentDepositValue;
    // console.log(totalDeposit);
    document.getElementById('currentDep').innerText = totalDeposit

    //input value none
    document.getElementById("depValue").value = ""


})