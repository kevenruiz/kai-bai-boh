// import functions and grab DOM elements
import { cpuKaiBaiBoh, didUserWin } from './utils.js';


const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('you-win');
const loseEl = document.getElementById('you-lose');
const drawEl = document.getElementById('draw');
// initialize state





let wins = 0;
let draws = 0;
let losses = 0;

// set event listeners to update state and DOM

buttonEl.addEventListener('click', () => {
    
    const computerGuess = cpuKaiBaiBoh();
    const radioInput = document.querySelector('input:checked');
    const userThrow = radioInput.value;
    console.log(userThrow);
    const result = didUserWin(userThrow, computerGuess);




    console.log(result, computerGuess, userThrow);

    
    if (result === 'win') {
        wins++;
      //  wins = wins+1\ This is the same thing ****
    // wins+=1 This is the same thing****
        whoWonEl.textContent = wins++;
    }
    if (result === 'draw') {
        draws++;
        drawEl.textContent = draws++;

    }
    if (result === 'loss') {
        losses++;
        loseEl.textContent = losses++;
    }
   
    
    

   // else if (actualGuess === 'you-lose') {
       //     return whoWonDiv.textContent = losses++;

    //  if (actualGuess === 'draw') {
      //          return whoWonDiv.textContent = draw++;


   

    


   
    //
    
    //if (didUserWin(cpuKaiBaiBoh) => {

    

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

