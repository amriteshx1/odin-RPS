let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const arrayIndex = Math.floor(Math.random() * choice.length);
    return choice[arrayIndex];
}

function playRound(userChoice){
    const computerChoice = getComputerChoice();
    const msg = document.getElementById("msg");

    if(userChoice === computerChoice){
        msg.innerText =(`It's a tie! Both chose ${userChoice}`);
        msg.style.backgroundColor = "gray";
    }else if((userChoice === "ROCK" && computerChoice === "SCISSORS") ||
             (userChoice === "PAPER" && computerChoice === "ROCK") ||
             (userChoice === "SCISSORS" && computerChoice === "PAPER")){
                msg.innerText = (`You won! ${userChoice} beats ${computerChoice}`);
                msg.style.backgroundColor = "green";
                userScore++;
    }else{
        msg.innerText = (`You lost! ${computerChoice} beats ${userChoice}`);
        msg.style.backgroundColor = "red";
        computerScore++;
    }

    updateScore();
    checkWinner();
}

function updateScore(){
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = computerScore;
}

function checkWinner(){
    const msg = document.getElementById("msg");
    if(userScore === 5){
        msg.innerText= ("Congratulations! You won 🎉");
        msg.style.backgroundColor = "gold";
        resetGame();
    }else if(computerScore === 5){
        msg.innerText=("Computer won! Better luck next time 🤗");
        msg.style.backgroundColor = "yellow";
        resetGame();
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    updateScore();
}

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click",() =>{
        playRound(choice.id.toUpperCase());
    })
})




