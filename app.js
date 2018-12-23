// SCORE COUNTER
let playerScore=0; 
let computerScore=0; 
let counter= 0; 

// COMPUTER
function computerPlayer() {
    let gameOptions = ["Rock", "Paper", "Scissors"]; 
    let gameChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)].toLowerCase(); 
    return gameChoice; 
}// end function computerPLayer 

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
    } //end else 
} //end function opPlayer 

// GAME FUNCTIONS 
function game() {

    while(counter<5) {
        function executeRound(playerSelection, computerSelection){
            if(playerSelection=="rock" && computerSelection=="scissors"){
                playerScore++;
                counter+=1; 
                alert("You win! Rock crushes Scissors!"); 
            }
            else if(playerSelection=="paper" && computerSelection=="rock"){
                playerScore++; 
                counter+=1; 
                alert("You win! Paper covers Rock!"); 
            }
            else if(playerSelection=="scissors" && computerSelection=="paper"){
                playerScore++; 
                counter+=1; 
                alert("You win! Scissors cuts Paper!"); 

            }
            else if(playerSelection==computerSelection){
                counter+=1; 
                alert("Ooh! It's a tie!"); 
            }
            else {
                counter+=1; 
                computerScore++; 
                alert(`Sorry! Computer wins! \n ${computerSelection} trumps ${playerSelection}`); 
            }
        }//end function executeRound 

        let playerSelection = opPlayer(); 
        let computerSelection = computerPlayer();
        executeRound(playerSelection, computerSelection); 
        
        
        if(counter<5){
            if(playerScore>computerScore){
                alert(`You are currently winning! \n Score Break Down: You: ${playerScore} Computer: ${computerScore}`);
            }
            else if(computerScore > playerScore){
                alert(`Computer is currently winning! \n Score Break Down: You: ${playerScore} Computer: ${computerScore}`);
            }
            else if(playerScore == computerScore){
                alert(`Both players are currently tied! \n Score Break Down: You: ${playerScore} Computer: ${computerScore}`); 
            }
        }
        else if(counter==5){
            if(playerScore>computerScore){
                alert(`You win! \n Your Score: ${playerScore} \n Computer Score: ${computerScore}`);
            }
            else if(computerScore > playerScore){
                alert(`Computer wins! \n Your Score: ${playerScore} \n Computer Score: ${computerScore}`);

            }//end else
        }//end else if
    } //end while 
} //end function 

function resetGame() {
    computerScore=0; 
    playerScore=0; 
    counter=0; 
    alert("Game has now reset!"); 
    opPlayer();
    game(); 
}

game(); 