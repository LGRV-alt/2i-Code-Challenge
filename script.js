// Number guessing game in the range of 1-10 with 5 guesses allowed to get the correct number

//------Grab HTML Elements to be used with JavaScript ------------
const userInput = document.querySelector(".user-input");
const checkGuess = document.querySelector(".check-guess");
const results = document.querySelector(".results");
const guessNumber = document.querySelector("#guess-number");

// ---------Sets inital Values -------------------

// Math random * 10 gives the range 0-9, by calling * 9 + 1 gives the range 1-10
let computerGuess = Math.floor(Math.random() * 9) + 1;
let numberOfGuesses = 0;
guessNumber.textContent = numberOfGuesses;
const allowedNumberOfGuesses = 5;

// ----------Event Listener------------------------

checkGuess.addEventListener("click", () => {
  let userGuess = userInput.value;
  checkValidNumber(userGuess);
  guessNumber.textContent = numberOfGuesses;
});

// ---------------Functions----------------------

// Function to validate user number input
function checkValidNumber(number) {
  if (number < 1 || number > 10) {
    results.textContent = "Number needs to be in range of 1-10";
    userInput.value = "";
  } else {
    runGame(number);
  }
}

// Reset the game
function resetGame() {
  userInput.value = "";
  computerGuess = Math.floor(Math.random() * 9) + 1;
  numberOfGuesses = 0;
}

// Game Function
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
      results.textContent = `Winner! The correct number was ${userGuess}, you got it on guess number ${numberOfGuesses}`;
      resetGame();
    }
  } else {
    results.textContent = `You lose, the correct answer was ${computerGuess}`;
    resetGame();
  }
}
