'use strict';
//DOM MANIPULATION//
//Javascript interact with webpages

/*
console.log(document.querySelector('.message')
    .textContent);
document.querySelector('.message').textContent = 'Correct Number! ';
console.log(document.querySelector('.message')
    .textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

console.log(secretNumber);
//CHECK BUTTON
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    if (!guess) {
        displayMessage('No Number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayNumber(secretNumber);
        document.querySelector('.number').style.width = '30rem';
        //HIGHSCORE
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? 'Low' : 'High');
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('You lost the game! :(');
            document.querySelector('.score').textContent = 0
        }
    }

});
//AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start Guessing');
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#23676b';
    document.querySelector('.guess').value = '';
});