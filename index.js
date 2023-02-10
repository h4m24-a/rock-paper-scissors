let playerScore = 0
let compScore = 0

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = choices[randomNum]
    return compChoice
}

const playRound =(playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors' 
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper' 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock crushes Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won! Scissors cuts Paper'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper covers Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock crushes Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors cuts Paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won! Paper covers Rock'
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));