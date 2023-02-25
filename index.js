// DOM elements
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const restart = document.getElementById('restart');


function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// Converting the letters to words
function convertToWord(letter) {
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	return 'Scissors';
}


// Result function text and border colour
function win(playerChoice, computerChoice) {
	const playerChoice_div = document.getElementById(playerChoice);
	playerScore++;
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}. You win! 💥`;
	playerChoice_div.classList.add('green-glow')
	setTimeout(() => playerChoice_div.classList.remove('green-glow'), 300);
}

function lose(playerChoice, computerChoice) {
	const playerChoice_div = document.getElementById(playerChoice);
	computerScore++;
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(playerChoice)} loses to ${convertToWord(computerChoice)}. You lost... 🤦‍♂️`;
	playerChoice_div.classList.add('red-glow')
	setTimeout(() => playerChoice_div.classList.remove('red-glow'), 300);
}

function draw(playerChoice, computerChoice) {
	const playerChoice_div = document.getElementById(playerChoice);
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(playerChoice)} equals ${convertToWord(computerChoice)}. Its a draw! 🙃`;
	playerChoice_div.classList.add('grey-glow')
	setTimeout(() => playerChoice_div.classList.remove('grey-glow'), 300);;
}


// Choices
function game(playerChoice) {
	const computerChoice = getComputerChoice();
	switch (playerChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(playerChoice, computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(playerChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(playerChoice, playerChoice);
			break;
	}
}

// Restart game function
	function restartGame() {
		playerScore_span.innerHTML = 0;
		computerScore_span.innerHTML = 0;
	}

// Buttons
function main() {
	rock_div.addEventListener('click', () =>
		game('r'));

	paper_div.addEventListener('click', () =>
		game('p'));

	scissors_div.addEventListener('click', () =>
		game('s'));

	restart.addEventListener('click', restartGame);
}

main()
