function getComputerChoice(){
    //Initialize array of possible choices
    const choices = ["Rock", "Paper", "Scissors"];

    //Return random element from array using Math.random()
    return choices[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());