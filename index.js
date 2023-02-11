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
        //
    compScore++
        return 'You lost! Rock crushes Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
        return 'You won! Scissors cuts Paper'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
        return 'You lost! Paper covers Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock crushes Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
        return 'You lost! Scissors cuts Paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
        return 'You won! Paper covers Rock'
    }
}


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw : Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
     }

     if (playerScore > compScore) {
        return 'You beat the computer! You are a genius'
      } else if (playerScore < compScore) {
        return 'The computer beat you! You need to practice more'
      } else {
        return 'It is a tie!'
      }
}

console.log(game())