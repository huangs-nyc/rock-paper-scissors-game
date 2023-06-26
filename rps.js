let startGame = false
let rockEl = document.querySelector("#rock-btn")
let paperEl = document.querySelector("#paper-btn")
let scissorsEl = document.querySelector("#scissors-btn")
let playerChoice = ""

// initially disable all buttons
disableBtns()

function startGame() {
    disableBtns()
}

// function startGame() {
//     startGame = true;
//     rockEl.textContent = "test1"
// }

// // function for computer to make a choice
// function computerChoice() {
//     let computerChoice = Math.floor(Math.random()*3)
//     if (computerChoice === 0) {
//         return "rock"
//     } else if (computerChoice === 1) {
//         return "paper"
//     } else {
//         return "scissors"
//     }
// }

// // function for player to make a choice
// function playerChoice() {
//     rockEl.addEventListener("click", playerChoiceHelper("rock"))
//     paperEl.addEventListener("click", playerChoiceHelper("paper"))
//     scissorsEl.addEventListener("click", playerChoiceHelper("scissors"))
// }

// // helper function for player choices
// function playerChoiceHelper(clickedChoice) {
//     disableBtns()
//     return clickedChoice
// }

// function to disable buttons
function disableBtns() {
    rockEl.setAttribute('disabled', 'true')
    paperEl.disabled = true;
    scissorsEl.disabled = true;
}

// // function to enable buttons
// function enableBtns() {
//     rockEl.disabled = false;
//     paperEl.disabled = false;
//     scissorsEl.disabled = false;
// }