'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Currect Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
/* 
// DRY for display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// DRY for display score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// DRY for display secret number
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

// DRY for background color setting
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// DRY for width of secret number
const setWidthSecretNum = function (width) {
  document.querySelector('.number').style.width = width;
};

// Starting values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// When bottom 'Check'
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  // When there is no number
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number ⛔';
    displayMessage('No number ⛔');

    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Currect Number!';
    displayMessage('🎉 Currect Number!');
    //document.querySelector('.number').textContent = secretNumber;
    displaySecretNumber(secretNumber);

    //document.querySelector('body').style.backgroundColor = '#60b347';
    setBackgroundColor('#60b347');
    //document.querySelector('.number').style.width = '30rem';
    setWidthSecretNum('30rem');

    // 077 Implementing Highscores
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //document.querySelector('.message').textContent = '😤 You loose the game!';
      displayMessage('😤 You loose the game!');
      //document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
});

// Coding Challenge #1
// When bottom 'Again'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = '?';
  displaySecretNumber('?');

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.guess').value = NaN;

  //document.querySelector('body').style.backgroundColor = '#222';
  setBackgroundColor('#222');
  //document.querySelector('.number').style.width = '15rem';
  setWidthSecretNum('15rem');
});
*/

// DRY for display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// DRY for display score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// DRY for display secret number
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

// DRY for background color setting
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// DRY for width of secret number
const setWidthSecretNum = function (width) {
  document.querySelector('.number').style.width = width;
};

// Starting values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// When bottom 'Check'
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  // When there is no number
  if (!guess) {
    displayMessage('No number ⛔');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Currect Number!');
    displaySecretNumber(secretNumber);
    setBackgroundColor('#60b347');
    setWidthSecretNum('30rem');
    // Added
    document.querySelector('.check').setAttribute('disabled', 'disabled');

    // 077 Implementing Highscores
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😤 You loose the game!');
      displayScore(0);
    }
  }
});

// When bottom 'Again'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaySecretNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = NaN;

  setBackgroundColor('#222');
  setWidthSecretNum('15rem');
  // Added
  document.querySelector('.check').removeAttribute('disabled', 'disabled');
});
