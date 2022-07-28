const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#error-msg");
const numOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", ()=> {
    hideMessage();
    if(isNaN(billAmount.value) || isNaN(cashGiven.value)) {
        return showMessage("Amount isn't a number");
    }
    else {
    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amtToBeReturned = cashGiven.value - billAmount.value;
            calcChange(amtToBeReturned);
        }
        else {
            showMessage("The cash amount is insufficient!");
        }           
    }
    else {
        showMessage("Amount can't be negative. Please try again.");
    }
}});

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calcChange(amtToBeReturned) {
    for(let i = 0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amtToBeReturned/availableNotes[i]);

        amtToBeReturned %= availableNotes[i];

        numOfNotes[i].innerText = numberOfNotes;
    }
}