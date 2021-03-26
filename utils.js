export function getActualGuess(someNumber) {
    if (someNumber >= .667) return 'scissors';
    if (someNumber <= .334) return 'rock';

    return 'paper';


}