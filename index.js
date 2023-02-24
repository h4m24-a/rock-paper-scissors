//DOM elements
const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function game(playerChoice) {
	const computerChoice = getComputerChoice();

}

// Buttons
function main() {
	rock_div.addEventListener('click', function() {
		game('r');
	})

	paper_div.addEventListener('click', function() {
		game('p');
	})

	scissors_div.addEventListener('click', function() {
		game('s');
})
}

main()



// const getComputerChoice = () => {
//     const choices = ['rock', 'paper', 'scissors']
//     const randomNum = Math.floor(Math.random() * 3)
//     const compChoice = choices[randomNum]
//     return compChoice
// }

// const playRound =(playerSelection, computerSelection) => {
//     if (playerSelection === computerSelection ) {
//         return `You tied! You both picked ${playerSelection}`   
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         //
//     computerScore++
//         return 'You lost! Rock crushes Scissors'
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//     playerScore++
//         return 'You won! Scissors cuts Paper'
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//     computerScore++
//         return 'You lost! Paper covers Rock'
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         return 'You won! Rock crushes Scissors'
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//     computerScore++
//         return 'You lost! Scissors cuts Paper'
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//     playerScore++
//         return 'You won! Paper covers Rock'
//     }
// }


// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Choose what to throw : Rock, Paper, Scissors').toLowerCase()
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//      }

//      if (playerScore > computerScore) {
//         return 'You beat the computer! You are a genius'
//       } else if (playerScore < computerScore) {
//         return 'The computer beat you! You need to practice more'
//       } else {
//         return 'It is a tie!'
//       }
// }

// console.log(game())