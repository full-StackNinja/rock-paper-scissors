let userWins;
let computerWins;
let tied;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[random];
}
// Decide winner of single round...
function roundPlay(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "round tied";
  }
  if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    return "user wins";
  } else {
    return "computer wins";
  }
}
// accessing buttons and text
const play = document.querySelector(".play");
const you = document.querySelector(".you");
const computer = document.querySelector(".computer");
const display = document.querySelector(".display-results");
const userChoice = document.querySelectorAll(".choice");
// Event handler to start the game.
play.addEventListener("click", () => {
  if (play.textContent === "Play Game") {
    play.textContent = "Stop Game";
    you.textContent = "You: 0";
    computer.textContent = "Computer: 0";
    display.textContent = "You Play First!";
    playGame(play.textContent);
  } else {
    play.textContent = "Play Game";
    you.textContent = "";
    computer.textContent = "";
    display.textContent = "";
    playGame(play.textContent);
  }
});
function getResult() {
  const roundResult = roundPlay(getComputerChoice(), this.value);
  if (roundResult === "computer wins") {
    computerWins++;
    computer.textContent = `Computer: ${computerWins}`;
    display.textContent = "Round Result: You Lose!!";
  } else if (roundResult === "user wins") {
    userWins++;
    you.textContent = `You: ${userWins}`;
    display.textContent = "Round Result: You Rock!!";
  } else {
    tied++;
    display.textContent = "Round Result: Tied!";
  }
  if (userWins === 5) {
    display.textContent = "Game Over: You Won the Game!";
    play.textContent = "Play Game";
    playGame(play.textContent);
  } else if (computerWins === 5) {
    display.textContent = "Game Over: You Lose!";
    play.textContent = "Play Game";
    playGame(play.textContent);
  }
}

function playGame(start) {
    userWins = 0;
    computerWins = 0;
    tied = 0;
  if (start === "Play Game") {
    userChoice.forEach((choice) => {
      console.log(choice);
      choice.removeEventListener("click", getResult);
    });
    return 0;
  } else if (start === "Stop Game") {
    userChoice.forEach((choice) => choice.addEventListener("click", getResult));
  }
}
