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
        return 'Round won! ' + playerSelectionCased + ' beats ' + computerSelection + '.';
    } 
    
    if (result === 'Lose') {
        return 'Round lost! ' + computerSelection + ' beats ' + playerSelectionCased + '.';
    }

    return 'Round draw! ' + playerSelectionCased + ' ties ' + computerSelection + '.';
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

/**
 * Reverts all buttons in a NodeList of buttons to their
 * default size and color.
 *
 * @param {NodeList} buttons The button's to revert.
 */
function revertButtons(buttons) {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'rgb(199, 236, 255)';
        button.style.scale = 1;
    });
}

/**
 * Changes the size and color of the CPU buttons based on the CPU's selection.
 *
 * @param {string} cpuChoice The CPU's move.
 */
 function changeCpuButtonColor(cpuChoice) {
    revertButtons(cpuButtons);
    cpuButtons.forEach((button) => {
        if(cpuChoice.toLowerCase() === button.id.substring(4)) {
            button.style.backgroundColor = 'rgb(149, 220, 255)';
            button.style.scale = 1.25;
        }
    })
}

/**
 * Updates the player and CPU scores based on the result of a round.
 * Increments either the player's or CPU's score by one, or does nothing if the round is a draw.
 *
 * @param {string} roundResult The result of one round.
 */
function updateScores(roundResult) {
    if (roundResult.charAt(6) === 'w') {
        playerScoreVal++;
        playerScore.textContent = 'Score: ' + playerScoreVal;
    } else if (roundResult.charAt(6) === 'l') {
        cpuScoreVal++;
        cpuScore.textContent = 'Score: ' + cpuScoreVal;
    }
}

/**
 * Updates the player and CPU scores based on the result of a round.
 * Increments either the player's or CPU's score by one, or does nothing if the round is a draw.
 *
 * @param {string} roundResult The result of one round.
 */
function checkScore() {
    if (playerScoreVal === 5) {
        results.textContent = 'You won the game! Final score: ' + playerScoreVal + '-' + cpuScoreVal;
        return true;
    }
    
    if (cpuScoreVal === 5) {
        results.textContent = 'You lost the game. Final score: ' + playerScoreVal + '-' + cpuScoreVal;
        return true;
    }

    return false;
}

function playerClick (event) {
    revertButtons(playerButtons);
    event.currentTarget.style.backgroundColor = 'rgb(149, 220, 255)';
    event.currentTarget.style.scale = 1.25;

    cpuChoice = getComputerChoice();
    changeCpuButtonColor(cpuChoice);

    roundResult = playRound(event.currentTarget.id, cpuChoice);
    updateScores(roundResult);
    results.textContent = roundResult;

    if(checkScore()) {
        revertButtons(playerButtons);
        revertButtons(cpuButtons);
        playerButtons.forEach(button => button.removeEventListener('click', playerClick));
    }


}


const playerButtons = document.querySelectorAll('.player-button');
const cpuButtons = document.querySelectorAll('.cpu-button');
const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');
let playerScoreVal = 0;
let cpuScoreVal = 0;

playerButtons.forEach(button => button.addEventListener('click', playerClick));