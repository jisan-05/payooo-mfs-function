/**
 * Common Shared functions here
 */

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
