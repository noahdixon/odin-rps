/**
 * Returns random rock, paper, scissors move.
 *
 * @return {string} The random move.
 */
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

/**
 * Converts string rock, paper, or scissors to an integer (0, 1, or 2).
 *
 * @param {string} selection The string move to be converted.
 * @return {int} The integer representation of the move.
 */
 function selectionValue(selection) {
    switch(selection) {
        case 'Rock':
            return 0;
        case 'Paper':
            return 1;
        default:
            return 2;
      }
 }


/**
 * Simulates a single round of rock, paper, scissors.
 *
 * @param {string} playerSelection The player's move.
 * @param {string} computerSelection The computer's move.
 * @return {string} The result of the round.
 */
function playRound(playerSelection, computerSelection) {

    const playerSelectionCased = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    console.log(playerSelectionCased);

    const outcomes = [['Drew', 'Lose', 'Win'],
                      ['Win', 'Drew', 'Lose'],
                      ['Lose', 'Win', 'Drew']];
    
    const result = outcomes[selectionValue(playerSelection)][selectionValue(computerSelection)];

    if (result === 'Win') {
        return 'You win! ' + playerSelectionCased + ' beats ' + computerSelection;
    } 
    
    if (result === 'Lose') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelectionCased;
    }

    return 'You Drew! ' + playerSelectionCased + ' ties ' + computerSelection;
  }

const playerSelection = "pApER";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));