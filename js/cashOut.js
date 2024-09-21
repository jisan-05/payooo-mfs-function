document.getElementById('btn-cash-out').addEventListener('click', function (event){
    event.preventDefault();
    
    const cashOut = getInputFieldValueById('input-cash-out-money');
    const pin = getInputFieldValueById('input-cash-out-pin');
    const currentBalance = getTextFieldValueById('account-balance');
    const updateBalance = currentBalance - cashOut;
    if(pin === 1234){
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert("Falied to cash out . Try again")
    }
})