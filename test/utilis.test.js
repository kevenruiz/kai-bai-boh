// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getActualGuess } from '../utils.js';

const test = QUnit.test;

test('if it is a number less than .334, return rock, if its a number greater than .335 but less than .667, return paper, if greater than .668 return with scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = rock;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getActualGuess(.334);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it is a number less than .334, return rock, if its a number greater than .335 but less than .667, return paper, if greater than .668 return with scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = paper;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getActualGuess(.5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it is a number less than .334, return rock, if its a number greater than .335 but less than .667, return paper, if greater than .668 return with scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = scissors;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getActualGuess(.668);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
