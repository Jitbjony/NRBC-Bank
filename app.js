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
const withdrawButton = document.getElementById("withdr");

depositButton.addEventListener('click', function(){
    const amount = getAmmount("depValue")
     
    callBalance("currentDep", amount)

    callBalance("currentBalance", amount)
    document.getElementById("depValue").value = ""
})

// Get amount
function getAmmount(id){
    const amount = document.getElementById(id);
    const amountValue = parseFloat(amount.value);
    return amountValue
}

//transaction function..... Given value is not in function so we declare in arguments
function callBalance(id, givenValue){
    const balance = document.getElementById(id).innerText;
    const balanceValue = parseFloat(balance);
    const totalBalance = givenValue+ balanceValue;
    document.getElementById(id).innerText = totalBalance;
}

withdrawButton.addEventListener("click", function(){
    const ammount = getAmmount("withdrawInput");

    callBalance("currentWithdraw",  ammount)
    // current balance - current withdraw
    callBalance("currentBalance", -1 * ammount)

    document.getElementById("withdrawInput").value = ""
})