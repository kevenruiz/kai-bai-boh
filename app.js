// import functions and grab DOM elements
const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const drawEl = document.getElementById('draw');
// initialize state

let wins = 0;
let total = 0;

// set event listeners to update state and DOM

buttonEl.addEventListener('click'), () => {

    // 1) User clicks submit
    //   -randomly pick a computer throw ('rock' | 'paper' | 'Scissors')
    const randomNumber = Math.floor();

    const actualGuess = getActualGuess(randomNumber);
    //   -get the user's guess
    //       -It lives in the radio button somehow
    //   -compare user guess to computer throw
    //   -display if the user won
    //   -increment the total
    //   -increment the win, if the use got it right. 
    //   -display new values for total, wins, and losses. 

};
