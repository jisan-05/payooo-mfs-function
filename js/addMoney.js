/**
 * How to get a number from an input field
 * 1. Create a variable
 * 2. right side document.getElementByID(id)
 * 3.Value
 * 4. parseFloat
 */
document
    .getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // console.log("add money btn clicked")
        const addMoney = getInputFieldValueById("input-add-money");
        const pinNumber = getInputFieldValueById("input-pin-number");

        //number validation
        if(isNaN(addMoney)){
            alert("Enter Number ??????")
            return;
        }


        //wrong way to verify . do not try it at your serious website
        if (pinNumber === 1234) {
            const balance = getTextFieldValueById("account-balance");
            const newBalance = balance + addMoney;
            document.getElementById("account-balance").innerText = newBalance;

            // add to transction history
            const p = document.createElement("p");
            p.classList.add('bg-blue-300')
            p.classList.add('p-3')
            p.classList.add('text-center')
            p.innerText = `Added ${addMoney} Tk. New Balancec ${newBalance}`;

            //should be a common function
            document.getElementById('transaction-section').appendChild(p)

        } else {
            alert("Failed to add money");
        }
    });
