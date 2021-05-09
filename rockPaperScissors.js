let playerScore = 0;
let computerScore = 0;

function game() {
	do {
		console.log(round());
	} while (gameWinner(playerScore, computerScore) == false);
	console.log(gameWinner(playerScore, computerScore));
	playerScore = 0;
	computerScore = 0;
}

function round() {
	let playerSelection = playerPlay();
	let computerSelection = computerPlay();
	let totalWinner = gameWinner(playerScore, computerScore)
	return winner(playerSelection, computerSelection);
}

// Checks to see if there is a game winner
function gameWinner(playerScore, computerScore) {
	if (playerScore == 5) {
		return "You won!";
	} else if (computerScore == 5) {
		return "You lost!";
	} else {
		return false;
	}
}

//Determines the winner of each round
function winner(playerSelection, computerSelection) {
	if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") || 
		(playerSelection == "paper" && computerSelection == "rock")) {
		playerScore += 1;
		return "player";
	} else if (
		(playerSelection == "scissors" && computerSelection == "rock") ||
		(playerSelection == "paper" && computerSelection == "scissors") || 
		(playerSelection == "rock" && computerSelection == "paper")) {
		computerScore += 1;
		return "computer";
	} else {
		return "draw";
	}
}
//Computer's choice
function computerPlay() {
	let choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)]
}
//Player's choice
function playerPlay() {
	let playerChoice = window.prompt("Please enter Rock, Paper, or Scissors!", "Rock");
	if (validChoice(playerChoice)) {
		return playerChoice.toLowerCase();
	} else {
		alert("This is an Invalid choice!");
	}
}
//Make sure player choice is valid
function validChoice(playerChoice) {
	let choices = ["rock", "paper", "scissors"];
	if (choices.includes(playerChoice.toLowerCase())) {
		return true;
	} else {
		return false;
	}
}


