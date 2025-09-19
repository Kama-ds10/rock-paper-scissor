
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
