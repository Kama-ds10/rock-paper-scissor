
// function getComputerChoice(){

//     const choice = ['Rock','Paper','Scissors'];
//     const randomChoice = Math.floor(Math.random()* choice.length)
//     const decision = choice[randomChoice];
//     return decision

// }

// getComputerChoice();
// console.log(getComputerChoice())


// function getHumanChoice(){
//     // const userInput = prompt('Choose between Rock,Paper or Scissors');

//     if (userInput === 'Rock'){
//         console.log('Rock');
//     }else if (userInput === 'Paper'){
//         console.log('Paper');
//     }else{
//         console.log('Scissor')
//     }
// }

// getHumanChoice();
// console.log(getHumanChoice());


// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice,computerChoice){

//     const inputHuman = humanChoice.toLowerCase();
//     const inputComputer = computerChoice.toLowerCase();
    

//     if(inputHuman === inputComputer){
//         console.log(`It's a tie! Both chose ${inputHuman}`)
        
//     }

//     else if(
//     (inputHuman === 'rock' && inputComputer === 'scissors') ||
//     (inputHuman === 'paper' && inputComputer === 'rock') ||
//     (inputHuman === 'scissors' && inputComputer === 'paper')){

//         console.log(`You win! ${inputHuman} beats ${inputComputer}
        
// `)
// humanScore++;
//     }else{

//      console.log(`You lose! ${inputComputer} beats ${inputHuman}.`);
//      computerScore++ ;

//     }

//         console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);

// // playRound();

// }

// (playRound('Rock','Paper'));


// function playGame(){

//  humanScore = 0;
//  computerScore = 0;

//  function playRound(humanChoice, computerChoice) {
//         const inputHuman = humanChoice.toLowerCase();
//         const inputComputer = computerChoice.toLowerCase();

//         if (inputHuman === inputComputer) {
//             console.log(`It's a tie! Both chose ${inputHuman}`);
//         } 
//         else if (
//             (inputHuman === 'rock' && inputComputer === 'scissors') ||
//             (inputHuman === 'paper' && inputComputer === 'rock') ||
//             (inputHuman === 'scissors' && inputComputer === 'paper')
//         ) {
//             console.log(`You win! ${inputHuman} beats ${inputComputer}.`);
//             humanScore++;
//         } 
//         else {
//             console.log(`You lose! ${inputComputer} beats ${inputHuman}.`);
//             computerScore++;
//         }
//     }

//     // // play 5 rounds
//     // playRound('Rock', 'Scissors');
//     // playRound('Paper', 'Rock');
//     // playRound('Scissors', 'Paper');
//     // playRound('Rock', 'Scissors');
//     // playRound('Paper', 'Scissors');

//     // declare winner at the end
//     console.log(`Final Score → Human: ${humanScore}, Computer: ${computerScore}`);

//     if (humanScore > computerScore) {
//         console.log("🎉 You are the overall winner!");
//     } else if (computerScore > humanScore) {
//         console.log("💻 Computer wins the game!");
//     } else {
//         console.log("🤝 It's an overall tie!");
//     }


// }

// playGame()


//new
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");
  const winnerDiv = document.getElementById("winner");

  // Clear previous round text
  resultsDiv.textContent = "";
  winnerDiv.textContent = "";

  const playerChoice = document.createElement("p");
  playerChoice.textContent = `Player chose: ${playerSelection}`;

  const computerChoice = document.createElement("p");
  computerChoice.textContent = `Computer chose: ${computerSelection}`;

  const outcome = document.createElement("p");

  if (playerSelection === computerSelection) {
    outcome.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    outcome.textContent = "You win this round!";
    playerScore++;
  } else {
    outcome.textContent = "You lose this round!";
    computerScore++;
  }

  // Display round results
  resultsDiv.appendChild(playerChoice);
  resultsDiv.appendChild(computerChoice);
  resultsDiv.appendChild(outcome);

  // Display running score
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check for game winner
  if (playerScore === 5 || computerScore === 5) {
    const winnerMessage = document.createElement("h2");
    if (playerScore === 5) {
      winnerMessage.textContent = "🎉 You won the game!";
    } else {
      winnerMessage.textContent = "💻 Computer won the game!";
    }
    winnerDiv.appendChild(winnerMessage);

    // Disable buttons when game ends
    disableButtons();
  }
}

// Disable all buttons after someone wins
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
