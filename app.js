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
    
