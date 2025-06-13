 let inputElement = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let counter = document.getElementById("counterNum");
let randomValue = Math.ceil(Math.random() * 100);

function checkGuess() {
    let previousNum = counter.textContent;
    let updatedNum = parseInt(previousNum) + 1;
    counter.textContent = updatedNum;
    let userValue = parseInt(inputElement.value);
    if (randomValue < userValue) {
        result.textContent = "its to high";
        result.style.color = "red";
    } else if (randomValue > userValue) {
        result.textContent = "its to low";
        result.style.color = "red";
    } else if (randomValue === userValue) {
        result.textContent = "congrats you win " + updatedNum + " Attempts";
        result.style.color = "green";
    }
}