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

// PLAYER
function opPlayer() {
    
}