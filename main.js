"use strict";

//generates a integer between 0 and the given number inclusively
function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

//returns Rock, Paper or Scissors randomly
function computerPlay() {
    let randomValue = random(2);

    if (randomValue === 0) {
        return "Rock";
    } else if (randomValue === 1) {
        return "Paper";
    } else if (randomValue === 2) {
        return "Scissors";
    }
}

//takes both player and computer choices and returns the result of a single round
function playRound(playerSelection, computerSelection) {
    //change player selection input
    playerSelection = window.prompt("Insert your choice:");
    computerSelection = computerPlay();

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `It's a tie! Both players chose ${computerSelection}`;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    } else {
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
}
