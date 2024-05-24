'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

// event manipulation


// random a number
let secretNumber = Math.floor(Math.random() * 20 + 1);

// score
let score = 20;
let highScore = 0;


console.log(secretNumber);
// check button event
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  // when there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // when player wins
  } else if (guessNumber === secretNumber) { 
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      
      // // when guess is too high
      // if (guessNumber > secretNumber) document.querySelector('.message').textContent = '😫 Too high!';
      // // when guess is too low
      // else document.querySelector('.message').textContent = '😣 Too low!';

      document.querySelector('.message').textContent = guessNumber > secretNumber ? '😫 Too high!' : '😣 Too low!';

      score--;
      document.querySelector('.score').textContent = score

    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!'
      score = 0;
      document.querySelector('.score').textContent = score;
    }


  }

  // else if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😫 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score

  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!'
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //   }
    
  
  //   // when guess is too low
  // } else if (guessNumber < secretNumber) {

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😣 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!'
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //   }
  
  // }
});


// again button event
document.querySelector('.again').addEventListener('click', function() {

  score = 20
  secretNumber = Math.floor(Math.random() * 20 + 1)
  console.log(secretNumber);


  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'



})


