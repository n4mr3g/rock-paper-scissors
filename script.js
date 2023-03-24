const getComputerChoice = function () {
	let num = Math.floor(Math.random() * 10) % 3 ;
	if (num === 0) {return "rock"};
	return num === 1 ? "paper" : "scissors";
}

const $message = $("#message");
const $computerChoice = $("#computer-choice");
const $playerChoice = $("#player-choice");
const $rockButton = $("#rock-button");
const $paperButton = $("#paper-button");
const $scissorsButton = $("#scissors-button");
const $playerScore = $("#player-score");
const $computerScore = $("#computer-score");
let	playerScore = 0;
let	computerScore = 0;

const $img_paper = $("<img>").attr("src", "img/paper.svg");
const $img_rock = $("<img>").attr("src", "img/rock.svg");
const $img_scissors = $("<img>").attr("src", "img/scissors.svg");

function onChoiceClick(choice) {
	let computerChoice = getComputerChoice();
	$computerChoice.text(`Computer chose: ${computerChoice}`);
	$playerChoice.text(`You chose: ${choice}`);
	checkWinner(choice, computerChoice);
}

const checkWinner = function (playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		$message.text("Tie!");
	}
	else if (playerChoice === "rock" && computerChoice === "paper" ||
			playerChoice === "paper" && computerChoice === "scissors" ||
			playerChoice === "scissors" && computerChoice === "rock") {
		$message.text(`Computer wins! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`);
		$computerScore.text(`Computer's score: ${++computerScore}`);
	}
	else if (playerChoice === "rock" && computerChoice === "scissors" ||
			playerChoice === "paper" && computerChoice === "rock" ||
			playerChoice === "scissors" && computerChoice === "paper") {
		$message.text(`You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`);
		$playerScore.text(`Player's score: ${++playerScore}`);
	}
}


$(document).on('keydown', function(event) {
	console.log("key pressed: " + event.key);
	if (event.key === "q") {
            onChoiceClick("rock");
    }
    else if (event.key === "w") {
            onChoiceClick("paper");
        }
	else if (event.key === "e") {
			onChoiceClick("scissors");
	}
});

$rockButton.on("click", () => onChoiceClick("rock"));
$paperButton.on("click", () => onChoiceClick("paper"));
$scissorsButton.on("click", () => onChoiceClick("scissors"));
