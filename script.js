const container = document.querySelector("#container");
const buttons = document.querySelector("#buttons")
const results = document.querySelector("#results");

function getComputerChoice(){
    let choice = Math.round(Math.random()*3);
    if (choice == 1){
        return "Rock";
    } else if (choice == 2){
        return "Paper";
    } else {
        return "Scissor";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "scissor" && computerSelection == "Paper"){
        playerScore += 1; 
        return "You win! Scissor beats Paper";        
    } else if (playerSelection == "paper" && computerSelection == "Scissor"){
        computerScore += 1;
        return "You Lose! Scissor beats Paper";        
    } else if (playerSelection == "paper" && computerSelection == "Rock"){
        playerScore += 1;
        return "You win! Paper beats Rock";        
    } else if (playerSelection == "rock" && computerSelection == "Paper"){
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "scissor" && computerSelection == "Rock"){
        computerScore += 1;
        return "You Lose! Rock beats Scissor";
    } else if (playerSelection == "rock" && computerSelection == "Scissor"){
        playerScore += 1;
        return "You win! Rock beats Scissor";
    } else {
        return "You tie!";
    }
}



const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
buttons.appendChild(rockBtn);
const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";
buttons.appendChild(paperBtn);
const scissorBtn = document.createElement("button");
scissorBtn.textContent = "scissor";
buttons.appendChild(scissorBtn);

var playerScore = 0;
var computerScore = 0;

rockBtn.addEventListener("click",()=>{
    const computerSelection = getComputerChoice();
    let result = document.createElement("p"); 
    result.textContent = playRound("rock", computerSelection);
    results.appendChild(result);
    const score = document.createElement("p");
    score.textContent = 
        "Player score: " +
        playerScore +
        " - Computer: " + 
        computerScore;
    results.appendChild(score);
    if (computerScore == 5 || playerScore == 5){
        if (playerScore == 5){
            result.textContent = "Player win!";
        }
        else {
            result.textContent = "Computer win!";
        }
        results.appendChild(result);
        playerScore = 0;
        computerScore = 0
    }    
});

paperBtn.addEventListener("click",()=>{
    const computerSelection = getComputerChoice();
    let result = document.createElement("p"); 
    result.textContent = playRound("paper", computerSelection);
    results.appendChild(result);
    const score = document.createElement("p");
    score.textContent = 
        "Player score: " +
        playerScore +
        " - Computer: " + 
        computerScore;
    results.appendChild(score);
    if (computerScore == 5 || playerScore == 5){
        if (playerScore == 5){
            result.textContent = "Player win!";
        }
        else {
            result.textContent = "Computer win!";
        }
        results.appendChild(result);
        playerScore = 0;
        computerScore = 0
    }   
});

scissorBtn.addEventListener("click",()=>{
    const computerSelection = getComputerChoice();
    let result = document.createElement("p"); 
    result.textContent = playRound("scissor", computerSelection);
    results.appendChild(result);
    const score = document.createElement("p");
    score.textContent = 
        "Player score: " +
        playerScore +
        " - Computer: " + 
        computerScore;
    results.appendChild(score);
    if (computerScore == 5 || playerScore == 5){
        if (playerScore == 5){
            result.textContent = "Player win!";
        }
        else {
            result.textContent = "Computer win!";
        }
        results.appendChild(result);
        playerScore = 0;
        computerScore = 0
    }
});
