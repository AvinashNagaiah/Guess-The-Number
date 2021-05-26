//Guess the Number Game

'use strict';

let numb = Math.trunc(Math.random() * 21);
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number';
    displayMessage('⛔ No number');
  } else if (guess === numb) {
    document.querySelector('.number').textContent = numb;
    // document.querySelector('.message').textContent = 'Correct Guess 🎉';
    displayMessage('Correct Guess 🎉');
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== numb) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess < numb ? '📉Too low value' : '📈Too high value';
      displayMessage(guess < numb ? '📉Too low value' : '📈Too high value');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'Your lost 💥';
      displayMessage('Your lost 💥');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#b22222';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numb = Math.trunc(Math.random() * 21);
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
