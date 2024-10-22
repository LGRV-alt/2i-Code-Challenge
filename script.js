// Grabbing the elements from the html page to be used with javascript

// User input box where the guess will be made
const userInput = document.querySelector(".user-input");
// Button to check if the guess made was correct or wrong
const checkGuess = document.querySelector(".check-guess");
// Element used to display the results of the guess
const results = document.querySelector(".results");
// Used to display the number of guess the player is on
const guessNumber = document.querySelector("#guess-number");

// Creates a random number saved as the computers guess
let computerGuess = Math.floor(Math.random() * 9) + 1;
// Sets the initial value of 0 for the guesses made
let numberOfGuesses = 0;
// Inserts into the HTML page the inital value for guesses made
guessNumber.textContent = 0;
// Sets the number of guesses allowed to be made before the game stops
const allowedNumberOfGuesses = 5;

console.log(computerGuess);

checkGuess.addEventListener("click", () => {
  let userGuess = userInput.value;
  checkValidNumber(userGuess);
  guessNumber.textContent = numberOfGuesses;
});

function checkValidNumber(number) {
  if (number < 1 || number > 10) {
    results.textContent = "Number needs to be in range of 1-10";
    userInput.value = "";
  } else {
    runGame(number);
  }
}

function runGame(userGuess) {
  if (numberOfGuesses < allowedNumberOfGuesses) {
    if (userGuess < computerGuess) {
      numberOfGuesses++;
      results.textContent = `You guessed ${userGuess}, the number is higher`;
      userInput.value = "";
    } else if (userGuess > computerGuess) {
      numberOfGuesses++;
      results.textContent = `You guessed ${userGuess}, the number is lower`;
      userInput.value = "";
    } else {
      numberOfGuesses++;
      results.textContent = `Winner! the correct number was ${userGuess}, you got it on guess number ${numberOfGuesses}`;
      userInput.value = "";
      computerGuess = Math.floor(Math.random() * 9) + 1;
      numberOfGuesses = 0;
    }
  } else {
    results.textContent = `You lose, the correct answer was ${computerGuess}`;
    computerGuess = Math.floor(Math.random() * 9) + 1;
    numberOfGuesses = 0;
  }
}
