const gameStatus = document.querySelector('#gameStatus');
const guessInput = document.querySelector('#guessInput');
const guessButton = document.querySelector('#guessButton');

const theNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessButton.onclick = function() {
  attempts++;
  let currentGuess = Number(guessInput.value);
  gameStatus.textContent = `${currentGuess}`;
  if (currentGuess === theNumber) {
    guessButton.disabled = guessInput.disabled = true;
    gameStatus.textContent += ' is the number.';
    alert(`Congratulations! You've guessed the number in ${attempts} attempt${attempts > 1 ? 's' : ''}!`);
  }
  else if (currentGuess > theNumber) {
    gameStatus.textContent += ' is too big.';
  }
  else {
    gameStatus.textContent += ' is too small.';
  }
};
