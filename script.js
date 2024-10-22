// Number guessing game in the range of 1-10 with 5 guesses allowed to get the correct number

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
guessNumber.textContent = numberOfGuesses;
// Sets the number of guesses allowed to be made before the game stops
const allowedNumberOfGuesses = 5;

// This button starts the game function
checkGuess.addEventListener("click", () => {
  //   Takes the inner value of the input box and stores it as the users guess
  let userGuess = userInput.value;
  //   Function to validate the number entered
  checkValidNumber(userGuess);
  //   Updates the guess number on the page
  guessNumber.textContent = numberOfGuesses;
});

// Function to validate user number input
function checkValidNumber(number) {
  if (number < 1 || number > 10) {
    results.textContent = "Number needs to be in range of 1-10";
    userInput.value = "";
  } else {
    // If number in valid range run the game function
    runGame(number);
  }
}

// Reset the game
function resetGame() {
  // Clears the input box
  userInput.value = "";
  //   Gives the computer guess a new random value
  computerGuess = Math.floor(Math.random() * 9) + 1;
  //   Resets the number of guesses made
  numberOfGuesses = 0;
}

// Game Function
function runGame(userGuess) {
  // First checks if the user hasnt used too many guesses
  if (numberOfGuesses < allowedNumberOfGuesses) {
    if (userGuess < computerGuess) {
      // Increase the number of guesses by 1
      numberOfGuesses++;
      //   Display a string with the users number guessed
      results.textContent = `You guessed ${userGuess}, the number is higher`;
      //   Resets the input box to allow for another guess to be made
      userInput.value = "";
    } else if (userGuess > computerGuess) {
      numberOfGuesses++;
      results.textContent = `You guessed ${userGuess}, the number is lower`;
      userInput.value = "";
    } else {
      numberOfGuesses++;
      results.textContent = `Winner! the correct number was ${userGuess}, you got it on guess number ${numberOfGuesses}`;
      resetGame();
    }
  } else {
    results.textContent = `You lose, the correct answer was ${computerGuess}`;
    resetGame();
  }
}
