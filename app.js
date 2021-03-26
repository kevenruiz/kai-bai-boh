// import functions and grab DOM elements
const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const drawEl = document.getElementById('draw');
// initialize state

let wins = 0;
let total = 0;

// set event listeners to update state and DOM