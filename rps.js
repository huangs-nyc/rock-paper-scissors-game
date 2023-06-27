let startGame = false
let rockEl = document.querySelector("#rock-btn")
let paperEl = document.querySelector("#paper-btn")
let scissorsEl = document.querySelector("#scissors-btn")
let startEl = document.querySelector("#start-game")
let resultEl = document.querySelector("#result-txt")
let stageEl = document.querySelector("#stage-txt")
let playerEmoji = ""
let cpuEmoji = ""
let emojiList = ["&#129704","&#128220", "&#9986"]

// initially disable all buttons
if (!startGame) {
    disableBtns()
}

function start() {
    resetGame()
    startGame = true;
    enableBtns()
    startEl.textContent = "GAME IN SESSION"
    startEl.disabled = true
}

// function for computer to make a choice
function computerChoice() {
    let computerChoice = Math.floor(Math.random()*3)
    cpuEmoji = emojiList[computerChoice]
    if (computerChoice === 0) {
        return 'rock'
    } else if (computerChoice === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

// function for player to make a choice
function playerChoice(handChoice) {
    pickedHand = true
    disableBtns()
    let cpuHand = computerChoice()
    setPlayerEmoji(handChoice)
    stageEl.innerHTML = "<u>YOU</u> &#160 <u>CPU</u>" + "<br />" +
                        "<br />" + playerEmoji + " VS " + cpuEmoji
    if (cpuHand === handChoice) {
        resultEl.textContent = "IT'S A TIE!"
    } else if (cpuHand === 'rock' && handChoice === 'paper' ||
                cpuHand === 'scissors' && handChoice === 'rock' ||
                cpuHand === 'paper' && handChoice === 'scissors') {
                     resultEl.textContent = "YOU WIN!"
    } else if (handChoice === 'rock' && cpuHand === 'paper' ||
                handChoice === 'scissors' && cpuHand === 'rock' ||
                handChoice === 'paper' && cpuHand === 'scissors') {
                    resultEl.textContent = "YOU LOSE..."
    }
    startEl.disabled = false
    startEl.textContent = "PLAY AGAIN?"
}

// function to disable buttons
function disableBtns() {
    rockEl.disabled = true
    paperEl.disabled = true
    scissorsEl.disabled = true
}

// function to enable buttons
function enableBtns() {
    rockEl.disabled = false
    paperEl.disabled = false
    scissorsEl.disabled = false
}

// function for resetting game
function resetGame() {
    resultEl.textContent = "PENDING RESULT..."
    stageEl.textContent = "CHOOSE YOUR FIGHTER"
    pickedHand = false
}

// function for player emoji
function setPlayerEmoji(handChoice) {
    if (handChoice === 'rock') {
        playerEmoji = emojiList[0]
    } else if (handChoice === 'paper') {
        playerEmoji = emojiList[1]
    } else {
        playerEmoji = emojiList[2]
    }
}