function getComputerChoice(){
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const arrayindex = Math.floor(Math.random()*choice.length);
    
    return choice[arrayindex];
}

function getHumanChoice(){
    const userChoice = prompt("Rock/Paper/Scissors:\n\n(Let's have a 5-round 1v1, See You in the Console!)").toUpperCase();
    if(userChoice == "ROCK" || userChoice == "PAPER" || userChoice== "SCISSORS"){
        return userChoice;
    }else{
        alert("Invalid Input, Try again!");
        return getHumanChoice();
    }
}

let humanScore= 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice){
    humanChoice= humanChoice.toUpperCase();

    if(humanChoice== computerChoice){
        console.log(`It's a tie! You both choose ${humanChoice}`);
    }else if((humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER'))
        {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }else{
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }    
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`\nCongratulations, You won!!!\nFinal score: You ${humanScore}, Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`\nAhhhh, You lost!!!\nFinal score: Computer ${computerScore}, You ${humanScore}`);
    } else {
        console.log(`\nIt's a tie! Final score: You ${humanScore}, Computer ${computerScore}`);
    }
}

playGame();

