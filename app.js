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
  const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();

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

