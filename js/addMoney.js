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
        console.log("add money with parameter", addMoney, pinNumber);
    });
