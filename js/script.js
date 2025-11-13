let humanChoice;
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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    console.log(
      `You win! ${
        humanChoice + (humanChoice === "Scissors" ? " beat" : " beats")
      } ${computerChoice}.`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${
        computerChoice + (computerChoice === "Scissors" ? " beat" : " beats")
      } ${humanChoice}.`
    );
  }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {
  humanChoice = 'Rock';
})

paperButton.addEventListener('click', () => {
  humanChoice = 'Paper';
})

scissorsButton.addEventListener('click', () => {
  humanChoice = 'Scissors';
})

const choices = document.querySelector('#choices');
choices.addEventListener('click', (e) => {
  if (e.target.id === 'choices') return;
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
})