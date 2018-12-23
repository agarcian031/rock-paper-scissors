// SCORE COUNTER
let playerScore=0; 
let computerScore=0; 
let counter= 0; 

// COMPUTER
function computerPlayer() {
    let gameOptions = ["Rock", "Paper", "Scissors"]; 
    let gameChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)].toLowerCase(); 
    return gameChoice; 
}

// PLAYER - prompt player for input 
function opPlayer() {
    let playerPrompt = prompt("Please choose Rock, Paper, or Scissors:");
    let playerChoice = playerPrompt.toLowerCase(); 

    // If user enters choice, return user choice 
    if (playerChoice=="rock" || playerChoice=="paper" || playerChoice=="scissors") {
        alert(`You have selected ${playerChoice} as your weapon`); 
        return playerChoice; 
    }
    // if user does not enter choice, prompt again
    else if (playerChoice==null || playerChoice=="") {
        alert("Oops! You need to enter Rock, Paper, or Scissors!"); 
        opPlayer()
    }
    else {
        alert ("Please choose Rock, Paper, or Scissors:"); 
        opPlayer()
    }
}