// Parse scores safely as numbers directly from Local Storage
let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
let winStreak = parseInt(localStorage.getItem("winStreak")) || 0;

const playerSelectionTarget = document.getElementById("player-score");
const computerSelectionTarget = document.getElementById("computer-score");
const streakTarget = document.getElementById("streak-counter");

const playerSlot = document.getElementById("player-slot");
const computerSlot = document.getElementById("computer-slot");

const resultsDiv = document.getElementById("results");
const winnerDiv = document.getElementById("winner");

// Emoji lookup table for clean state mapping
const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };

// Audio configuration with safety guard checking
const clickSound = new Audio("sounds/click.wav");
const winSound = new Audio("sounds/win.wav");
const loseSound = new Audio("sounds/gameover.wav");

function safelyPlaySound(audioElement) {
    audioElement.play().catch(() => { /* Swallows auto-play block exceptions gracefully */ });
}

// Initial state display render
function initializeUI() {
    playerSelectionTarget.textContent = playerScore;
    computerSelectionTarget.textContent = computerScore;
    streakTarget.textContent = `Streak: ${winStreak} 🔥`;
}
initializeUI();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return;
    
    safelyPlaySound(clickSound);
    const computerSelection = getComputerChoice();

    // Render interactive visual arena slots
    playerSlot.textContent = emojis[playerSelection];
    computerSlot.textContent = emojis[computerSelection];
    
    // Trigger CSS micro-animations cleanly
    playerSlot.classList.remove("pop-animation");
    computerSlot.classList.remove("pop-animation");
    void playerSlot.offsetWidth; // Force DOM reflow to restart animation sequence
    playerSlot.classList.add("pop-animation");
    computerSlot.classList.add("pop-animation");

    resultsDiv.textContent = `You played ${playerSelection} against ${computerSelection}.`;

    // Process game logic conditions
    if (playerSelection === computerSelection) {
        winnerDiv.textContent = "It's an even standoff. Tie!";
        winnerDiv.className = "text-tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        winnerDiv.textContent = "Round secured! You win.";
        winnerDiv.className = "text-win";
        playerScore++;
        winStreak++;
        safelyPlaySound(winSound);
    } else {
        winnerDiv.textContent = "The computer outsmarted you. You lose.";
        winnerDiv.className = "text-lose";
        computerScore++;
        winStreak = 0; // Break active winning streak
        safelyPlaySound(loseSound);
    }

    // Persist session progress metrics state updates
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
    localStorage.setItem("winStreak", winStreak);

    playerSelectionTarget.textContent = playerScore;
    computerSelectionTarget.textContent = computerScore;
    streakTarget.textContent = `Streak: ${winStreak} 🔥`;

    checkMatchEnd();
}

function checkMatchEnd() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            winnerDiv.textContent = "🏆 Victory! You dominated the match!";
            winnerDiv.className = "text-win pop-animation";
        } else {
            winnerDiv.textContent = "💻 Defeat! The computer conquered the match.";
            winnerDiv.className = "text-lose pop-animation";
        }
        
        toggleButtons(true);
    }
}

function toggleButtons(disabledState) {
    ["rock", "paper", "scissors"].forEach(id => {
        document.getElementById(id).disabled = disabledState;
    });
}

// Reset implementation clear patterns
document.getElementById("reset").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    winStreak = 0;

    localStorage.clear();

    initializeUI();
    
    playerSlot.textContent = "?";
    computerSlot.textContent = "?";
    resultsDiv.textContent = "Make your move to begin the match";
    winnerDiv.textContent = "";
    winnerDiv.className = "";

    toggleButtons(false);
});

// Setup event delegation handling
document.querySelectorAll(".card-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const targetChoice = e.currentTarget.getAttribute("data-choice");
        playRound(targetChoice);
    });
});