let playerScore = 0;
let computerScore = 0;

function roundWinner(playerChoice, computerChoice) {
	console.log(playerChoice);
	console.log(computerChoice);
	if (
		(playerChoice == "rock" && computerChoice == "scissors") ||
		(playerChoice == "paper" && computerChoice == "rock") ||
		(playerChoice == "scissors" && computerChoice == "paper")
	) {
		return "Player";
	} else if (
		(playerChoice == "scissors" && computerChoice == "rock") ||
		(playerChoice == "rock" && computerChoice == "paper") ||
		(playerChoice == "paper" && computerChoice == "scissors")

	) {
		return "Computer";
	} else {
		return "Draw";
	}
}
//updates the count and announces round winner
function updateGame(winner) {
	const currentHeaderScore = document.getElementById("score-header");
	const playerCurrentScore = document.getElementById("player-score");
	const computerCurrentScore = document.getElementById("computer-score");

	if (winner === "Player") {
		currentHeaderScore.textContent = "You won!";
		playerScore += 1;
	} else if (winner === "Computer") {
		currentHeaderScore.textContent = "You lost!";
		computerScore += 1;
	} else if (winner === "Draw") {
		currentHeaderScore.textContent = "Draw!";
	}
	playerCurrentScore.textContent = `Player: ${playerScore}`;
	computerCurrentScore.textContent = `Computer: ${computerScore}`;

	isGameOver();
}

function isGameOver() {
	if (playerScore == 5) {
		alert("Game over, You won!");
		location.reload();
	} else if (computerScore == 5) {
		alert("Gave over, You Lost!");
		location.reload();
	}
}

//computer makes a choice
function computerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

//updates the image of the move
function updateChoice(player, computer) {
	const playerSymb = document.getElementById("player-choice");
	const computerSymb = document.getElementById("computer-choice");

	
	const playerSymbName = `fa-hand-${player} fa-4x`;
	const computerSymbName = `fa-hand-${computer} fa-4x`;

	playerSymb.classList = `far ${playerSymbName}`;
	computerSymb.classList = `far ${computerSymbName}`;
}

//Player clicks, everything above this is activated
const playerButtons = document.querySelectorAll('button');
//Returns rock, paper, or scissors depending on what player chooses
playerButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.id == "player-rock") {
			//thisRoundComputerChoice so the computerChoice is consistent
			let thisRoundComputerChoice = computerChoice();
			updateChoice("rock", thisRoundComputerChoice);
			updateGame(roundWinner("rock", thisRoundComputerChoice));
		} else if (button.id == "player-paper") {
			let thisRoundComputerChoice = computerChoice();
			updateChoice("paper", thisRoundComputerChoice);
			updateGame(roundWinner("paper", thisRoundComputerChoice));
		} else if (button.id == "player-scissors") {
			let thisRoundComputerChoice = computerChoice();
			updateChoice("scissors", thisRoundComputerChoice);
			updateGame(roundWinner("scissors", thisRoundComputerChoice));
		}
	});
});


