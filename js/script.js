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

// Not checking for invalid input as the task specifically says not to
function getHumanChoice() {
  return prompt("Choose your move (Rock, Paper or Scissors): ");
}

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice =
      humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
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

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

  }
  
  console.log("Total score:");
  console.log(`You: ${humanScore}. Computer: ${computerScore}`);
  console.log(
    humanScore === computerScore
      ? "It's a tie!"
      : humanScore < computerScore
      ? "Computer wins!"
      : "You win!"
  );
}
