
function getComputerChoice(){

    const choice = ['Rock','Paper','Scissors'];
    const randomChioce = Math.floor(Math.random()* choice.length)
    const decision = choice[randomChioce];
    return decision

}

getComputerChoice();
console.log(getComputerChoice())


function getHumanChoice(){
    const userInput = prompt('Choose between Rock,Paper or Scissors');

    if (userInput === 'Rock'){
        console.log('Rock');
    }else if (userInput === 'Paper'){
        console.log('Paper');
    }else{
        console.log('Scissor')
    }
}

getHumanChoice();
// console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

    const inputHuman = humanChoice.toLowerCase();
    const inputComputer = computerChoice.toLowerCase();
    

    if(inputHuman === inputComputer){
        console.log(`It's a tie! Both chose ${inputHuman}`)
        
    }

    else if(
    (inputHuman === 'rock' && inputComputer === 'scissors') ||
    (inputHuman === 'paper' && inputComputer === 'rock') ||
    (inputHuman === 'scissors' && inputComputer === 'paper')){

        console.log(`You win! ${inputHuman} beats ${inputComputer}
        
`)
humanScore++;
    }else{

     console.log(`You lose! ${inputComputer} beats ${inputHuman}.`);
     computerScore++ ;

    }

        console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);

// playRound();

}

(playRound('Rock','Paper'));


function playGame(){

 humanScore = 0;
 computerScore = 0;

 function playRound(humanChoice, computerChoice) {
        const inputHuman = humanChoice.toLowerCase();
        const inputComputer = computerChoice.toLowerCase();

        if (inputHuman === inputComputer) {
            console.log(`It's a tie! Both chose ${inputHuman}`);
        } 
        else if (
            (inputHuman === 'rock' && inputComputer === 'scissors') ||
            (inputHuman === 'paper' && inputComputer === 'rock') ||
            (inputHuman === 'scissors' && inputComputer === 'paper')
        ) {
            console.log(`You win! ${inputHuman} beats ${inputComputer}.`);
            humanScore++;
        } 
        else {
            console.log(`You lose! ${inputComputer} beats ${inputHuman}.`);
            computerScore++;
        }
    }

    // play 5 rounds
    playRound('Rock', 'Scissors');
    playRound('Paper', 'Rock');
    playRound('Scissors', 'Paper');
    playRound('Rock', 'Scissors');
    playRound('Paper', 'Scissors');

    // declare winner at the end
    console.log(`Final Score → Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🎉 You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's an overall tie!");
    }


}

playGame()
