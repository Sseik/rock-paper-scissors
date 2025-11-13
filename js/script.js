let humanScore = 0;
let computerScore = 0;

// Not using arrays because they are yet to be covered in the lessons
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    default:
      choice = "Scissors";
  }
  return choice;
}

const resultDiv = document.querySelector("#result");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${
      humanChoice + (humanChoice === "Scissors" ? " beat" : " beats")
    } ${computerChoice}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${
      computerChoice + (computerChoice === "Scissors" ? " beat" : " beats")
    } ${humanChoice}.`;
  }
}

const restartButton = document.querySelector('#restart');
const choiceButtons = document.querySelectorAll("#choices button");

function endGame() {
  resultDiv.textContent += ` ${computerScore === 5 ? "Computer" : "You"} won!`;
  choiceButtons.forEach((button) => (button.disabled = true));
  restartButton.hidden = false;
}

const choices = document.querySelector("#choices");
choices.addEventListener("click", (e) => {
  if (e.target.id === "choices") return;
  let humanChoice = e.target.id;
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
  playRound(humanChoice, getComputerChoice());
  if (humanScore === 5 || computerScore === 5) endGame();
});

restartButton.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  choiceButtons.forEach(button => button.disabled = false);
  restartButton.hidden = true;
})