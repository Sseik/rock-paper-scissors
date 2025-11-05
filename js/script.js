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

// Not checking for invalid input as the task specifically says not to
function getHumanChoice() {
  return prompt("Choose your move (Rock, Paper or Scissors): ");
}
