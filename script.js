let playerScore = 0;
let computerScore = 0;

//Player chooses rock
function playerRock() {
	console.log("rock");
	return "rock";
}
//Player chooses paper
function playerPaper() {
	console.log("paper");
	return "paper";
}
//Player chooses scissors
function playerScissors() {
	console.log("scissors");
	return "scissors";
}

function computerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

const rockBtn = document.querySelector('#player-rock');
rockBtn.addEventListener('click', playerRock);

const paperBtn = document.querySelector('#player-paper');
paperBtn.addEventListener('click', playerPaper);

const scissorsBtn = document.querySelector('#player-scissors');
scissorsBtn.addEventListener('click', playerScissors);

