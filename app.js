
function getComputerChoice(){

    const choice = ['rock','paper','Scissors'];
    const randomChioce = Math.floor(Math.random()* choice.length)
    const decision = choice[randomChioce];
    return decision

}

getComputerChoice();
console.log(getComputerChoice())


function getHumanChoice(){
    const userInput = prompt('Choose between Rock,Paper or Scissors');

    if (userInput === 'rock'){
        console.log('Rock');
    }else if (userInput === 'paper'){
        console.log('Paper');
    }else{
        console.log('Scissor')
    }
}

getHumanChoice();
console.log(getHumanChoice());