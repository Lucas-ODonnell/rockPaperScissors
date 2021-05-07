function round() {
	let playerSelection = playerPlay();
	let computerSelection = computerPlay();
	return winner(playerSelection, computerSelection);
}

function winner(playerSelection, computerSelection) {
	if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") || 
		(playerSelection == "paper" && computerSelection == "rock")) {
		return "player";
	} else if (
		(playerSelection == "scissors" && computerSelection == "rock") ||
		(playerSelection == "paper" && computerSelection == "scissors") || 
		(playerSelection == "rock" && computerSelection == "paper")) {
		return "computer";
	} else {
		return "draw";
	}
}

function computerPlay() {
	let choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)]
};

function playerPlay() {
	let playerChoice = window.prompt("Please enter Rock, Paper, or Scissors!", "Rock");
	if (validChoice(playerChoice)) {
		return playerChoice.toLowerCase();
	} else {
		alert("This is an Invalid choice!");
	}
}

function validChoice(playerChoice) {
	let choices = ["rock", "paper", "scissors"];
	if (choices.includes(playerChoice.toLowerCase())) {
		return true;
	} else {
		return false;
	}
}


