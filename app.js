let playerScore = localStorage.getItem("playerScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

// SOUND EFFECTS
const clickSound = new Audio("sounds/click.wav");
const winSound = new Audio("sounds/win.wav");
const loseSound = new Audio("sounds/gameover.wav");

// show saved score on page load
scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;


// COMPUTER CHOICE
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


// PLAY ROUND
function playRound(playerSelection) {

  clickSound.play();

  const computerSelection = computerPlay();

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
    winSound.play();

  } else {

    outcome.textContent = "You lose this round!";
    computerScore++;
    loseSound.play();

  }

  // SAVE SCORE
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);


  // SHOW RESULTS
  resultsDiv.appendChild(playerChoice);
  resultsDiv.appendChild(computerChoice);
  resultsDiv.appendChild(outcome);


  // UPDATE SCORE
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;


  // CHECK GAME WINNER
  if (playerScore == 5 || computerScore == 5) {

    const winnerMessage = document.createElement("h2");

    if (playerScore == 5) {

      winnerMessage.textContent = "🎉 You won the game!";
      winnerDiv.classList.add("win-animation");

    } else {

      winnerMessage.textContent = "💻 Computer won the game!";

    }

    winnerDiv.appendChild(winnerMessage);

    disableButtons();
  }

}


// DISABLE BUTTONS
function disableButtons() {

  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;

}


// RESET GAME
document.getElementById("reset").addEventListener("click", () => {

  playerScore = 0;
  computerScore = 0;

  localStorage.setItem("playerScore", 0);
  localStorage.setItem("computerScore", 0);

  scoreDiv.textContent = "Player: 0 | Computer: 0";

  resultsDiv.textContent = "";
  winnerDiv.textContent = "";

  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;

});


// BUTTON EVENTS
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));