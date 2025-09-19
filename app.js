// console.log("Hello World")



function getComputerChoice() {
  const choose = prompt("Enter rock, paper, or scissors:");
  if (choose === "rock" || choose === "paper" || choose === "scissors") {
    return choose;
  } else {
    console.log("Invalid choose! Please enter rock, paper, or scissors.");
    return getComputerChoice(); 
  }
}
// console.log(getComputerChoice("rock"))

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice! Please type rock, paper, or scissors.");
    return getHumanChoice(); 
  }
}

// Test it
console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice){

    // humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
    console.log("It's a tie! You both chose " + humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
 console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);