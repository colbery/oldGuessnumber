'use strict';

/*
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number');
document.querySelector('.score');
const guess =document.querySelector('.guess');

// console.log(guess.value);
guess.value=10;
*/
let score = 20;
let highscore = 0;

let number = Math.floor(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);
  //   console.log(typeof guess);
  //   !guess
  //     ? (document.querySelector('.message').textContent = 'no number')
  //     : (document.querySelector('.message').textContent = 'there is number');

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'You guessed right :)';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'You guessed to high :(';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You loosed :(';
      }
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'You guessed to low :(';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You loosed :(';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
