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
    if (playerSelection == "Scissor" && computerSelection == "Paper"){        
        return "You win! Scissor beats Paper";        
    } else if (playerSelection == "Paper" && computerSelection == "Scissor"){
        return "You Lose! Scissor beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "Scissor" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissor";
    } else if (playerSelection == "Rock" && computerSelection == "Scissor"){
        return "You win! Rock beats Scissor";
    } else {
        return "You tie!";
    }
}
function playGame(){
    const playerSelection = prompt("Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

playGame();
playGame();
playGame();
playGame();
playGame();
