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
    if (playerSelectionCased !== 'Rock' && playerSelectionCased !== 'Paper' && playerSelectionCased !== 'Scissors') {
        return -1;
    }

    const outcomes = [['Drew', 'Lose', 'Win'],
                      ['Win', 'Drew', 'Lose'],
                      ['Lose', 'Win', 'Drew']];
    
    const result = outcomes[selectionValue(playerSelectionCased)][selectionValue(computerSelection)];

    if (result === 'Win') {
        return 'You win! ' + playerSelectionCased + ' beats ' + computerSelection + '.';
    } 
    
    if (result === 'Lose') {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelectionCased + '.';
    }

    return 'You draw! ' + playerSelectionCased + ' ties ' + computerSelection + '.';
  }

  /**
 * Simulates a five round game of rock, paper, scissors.
 *
 * @return {string} The result of the game.
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    let i = 0;
    
    while (i < 5) {

        //get player selection with window.prompt()
        roundResult = playRound(window.prompt('Enter your move. Rock, paper, or scissors.'), getComputerChoice());
        if (roundResult === -1) { //if player selection is invalid
            console.log('Invalid selection. Please enter rock, paper, or scissors.');
            continue;
        }

        console.log(roundResult);
        
        switch (roundResult.charAt(4)) {
            case 'w':
                playerScore++;
                break;
            case 'l':
                computerScore++;
            default:
                break;
        }

        i++;
     }

     if (playerScore > computerScore) {
        console.log('You won the game ' + playerScore + ' to ' + computerScore + '!');
     } else if (computerScore > playerScore) {
        console.log('You lost the game ' + computerScore + ' to ' + playerScore + '.');
     } else {
        console.log('You drew the game ' + playerScore + ' to ' + computerScore + '.');
     }

}