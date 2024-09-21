document
    .getElementById("show-add-button")
    .addEventListener("click", function () {
        console.log("Show add button clicked");
        showSectionById('add-money-form')
    });

document.getElementById('show-cash-out').addEventListener('click',function(){
    showSectionById('cash-out-form')
})
document.getElementById('show-transition').addEventListener('click',function(){
    showSectionById('transaction-section')
})
