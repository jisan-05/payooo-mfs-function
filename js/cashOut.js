document.getElementById('btn-cash-out').addEventListener('click', function (event){
    event.preventDefault();
    
    const cashOut = getInputFieldValueById('input-cash-out-money');
    const pin = getInputFieldValueById('input-cash-out-pin');
    const currentBalance = getTextFieldValueById('account-balance');
    const updateBalance = currentBalance - cashOut;

    //number validation
    if(isNaN(cashOut)){
        alert("Enter Number ??????")
        return;
    }
    if(currentBalance < cashOut){
        alert("Not enough Money ")
        return;
    }


    if(pin === 1234){
        document.getElementById('account-balance').innerText = updateBalance;
        
        //add to transaction history
        const div =document.createElement('div')
        div.classList.add('bg-yellow-200')
        div.innerHTML = `
        <h1 class="text-3xl text-center font-bold">Cashout History</h1>
        <p class="text-center font-bold">${cashOut} withdraw and new balance ${updateBalance}</p>
        `
        const newDiv = document.getElementById('transaction-history')
        newDiv.appendChild(div)

    }
    else{
        alert("Falied to cash out . Try again")
    }
})