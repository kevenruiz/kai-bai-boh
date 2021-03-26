// import functions and grab DOM elements
import { cpuKaiBaiBoh } from '../utils.js';

const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const drawEl = document.getElementById('draw');
// initialize state

let wins = 0;
let total = 0;

// set event listeners to update state and DOM

buttonEl.addEventListener('click', () => {
    const randomNumber = Math.ceil(Math.random() * 3);
    const actualGuess = cpuKaiBaiBoh(randomNumber);
    console.log(actualGuess);
    //


});

// 1) User clicks submit
//   -randomly pick a computer throw ('rock' | 'paper' | 'Scissors')



    //   -get the user's guess
    //       -It lives in the radio button somehow
    //   -compare user guess to computer throw
    //   -display if the user won
    //   -increment the total
    //   -increment the win, if the use got it right. 
    //   -display new values for total, wins, and losses. 

