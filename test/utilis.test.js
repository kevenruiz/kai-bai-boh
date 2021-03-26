// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cpuKaiBaiBoh } from '../utils.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('if the number is 2, expect rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = cpuKaiBaiBoh(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if the numebr is 3, expect paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = cpuKaiBaiBoh(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it is a number is 1, expect paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = cpuKaiBaiBoh(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});




test('cpu and players throw are identical', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    const player = 'scissors';
    const computer = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('cpu and player throw result in player win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    const player = 'paper';
    const computer = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('cpu and player throw result in player loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    const player = 'scissors';
    const computer = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//TDD a didUserWin function that:
//
//Has two parameters: player and computer
//Returns one of the following values:
//draw - the throws are identical
//win - the player's throw beats the computer throw
//lose - the computer's throw beats the player's throw