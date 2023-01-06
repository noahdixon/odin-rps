function getComputerChoice(){
    let choiceVal = Math.floor(Math.random()*3);
    if (choiceVal === 0) {
        return 'Rock';
    }
    if (choiceVal === 1) {
        return 'Paper';
    }
        return 'Scissors';
}

console.log(getComputerChoice());