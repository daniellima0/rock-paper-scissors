"use strict";

function getRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

function getComputerChoice() {
    let randomNumber = getRandomNumber(2);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

function playRound(playerChoice) {

    let computerChoice = getComputerChoice();
    let resultTieArray = []
    let resultWinArray = []
    let resultLoseArray = []

    console.log(computerChoice);
    console.log(playerChoice);

    if (playerChoice == computerChoice) {
        resultTieArray = [`It's a tie! Both players chose ${computerChoice}`, computerChoice]
        return resultTieArray;
    } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
        resultLoseArray = [`You Lose! ${computerChoice} beats ${playerChoice}`, computerChoice];
        return resultLoseArray;
    } else {
        resultWinArray = [`You Win! ${playerChoice} beats ${computerChoice}`, computerChoice];
        return resultWinArray;
    }
}

function showResult(result) {
    const container = document.querySelector('#container');
    const oldParagraph = container.querySelector("#resultParagraph");
    oldParagraph && oldParagraph.remove();
    const paragraph = document.createElement('p');
    paragraph.id = "resultParagraph";
    paragraph.textContent = result;
    paragraph.style.fontSize = '1.8rem';
    paragraph.style.textAlign = 'center';
    paragraph.style.position = 'absolute';
    paragraph.style.top = '54%';
    paragraph.style.right = '0';
    paragraph.style.left = '0';
    paragraph.style.width = 'max-content';
    paragraph.style.height = 'max-content';
    paragraph.style.margin = 'auto';
    container.appendChild(paragraph);
}

function showUserChoice(choice) {

    const container = document.querySelector('#container');
    // Why querySelectorAll doesn't work?
    const oldSymbol = container.querySelector(".resultSymbol");
    oldSymbol && oldSymbol.remove();

    if (choice == 'rock') {
        const rockSymbol = document.createElement('img');
        rockSymbol.className = "resultSymbol";
        rockSymbol.src = "rock.png";
        rockSymbol.style.width = '6rem';
        rockSymbol.style.position = 'absolute';
        rockSymbol.style.top = '33rem';
        rockSymbol.style.left = '11.8rem';
        rockSymbol.style.margin = 'auto';
        container.append(rockSymbol);
    } else if (choice == 'paper') {
        const paperSymbol = document.createElement('img');
        paperSymbol.className = "resultSymbol";
        paperSymbol.src = "paper.png";
        paperSymbol.style.width = '6rem';
        paperSymbol.style.position = 'absolute';
        paperSymbol.style.top = '33rem';
        paperSymbol.style.left = '11.8rem';
        paperSymbol.style.margin = 'auto';
        container.append(paperSymbol);
    } else if (choice == 'scissors') {
        const scissorsSymbol = document.createElement('img');
        scissorsSymbol.className = "resultSymbol";
        scissorsSymbol.src = "scissors.png";
        scissorsSymbol.style.width = '6rem';
        scissorsSymbol.style.position = 'absolute';
        scissorsSymbol.style.top = '33rem';
        scissorsSymbol.style.left = '11.8rem';
        scissorsSymbol.style.margin = 'auto';
        container.append(scissorsSymbol);
    }
}

function showComputerChoice(choice) {
    const container = document.querySelector('#container');
    const oldSymbol = container.querySelector(".resultSymbolComputer");
    oldSymbol && oldSymbol.remove();

    if (choice == 'rock') {
        const rockSymbol = document.createElement('img');
        rockSymbol.className = "resultSymbolComputer";
        rockSymbol.src = "rock.png";
        rockSymbol.style.width = '6rem';
        rockSymbol.style.position = 'absolute';
        rockSymbol.style.top = '19.5rem';
        rockSymbol.style.left = '11.8rem';
        rockSymbol.style.margin = 'auto';
        rockSymbol.style.transform = 'rotate(180deg)';
        container.append(rockSymbol);
    } else if (choice == 'paper') {
        const paperSymbol = document.createElement('img');
        paperSymbol.className = "resultSymbolComputer";
        paperSymbol.src = "paper.png";
        paperSymbol.style.width = '6rem';
        paperSymbol.style.position = 'absolute';
        paperSymbol.style.top = '19.5rem';
        paperSymbol.style.left = '11.8rem';
        paperSymbol.style.margin = 'auto';
        paperSymbol.style.transform = 'rotate(180deg)';
        container.append(paperSymbol);
    } else if (choice == 'scissors') {
        const scissorsSymbol = document.createElement('img');
        scissorsSymbol.className = "resultSymbolComputer";
        scissorsSymbol.src = "scissors.png";
        scissorsSymbol.style.width = '6rem';
        scissorsSymbol.style.position = 'absolute';
        scissorsSymbol.style.top = '19.5rem';
        scissorsSymbol.style.left = '11.8rem';
        scissorsSymbol.style.margin = 'auto';
        scissorsSymbol.style.transform = 'rotate(180deg)';
        container.append(scissorsSymbol);
    }
}

const userButtons = Array.from(document.querySelectorAll('.user-button'));
const computerButtons = Array.from(document.querySelectorAll('.computer-button'));

userButtons.forEach(userButton => {
    userButton.addEventListener('click', e => {
        let result = playRound(userButton.dataset.choice);
        showResult(result[0]);
        showUserChoice(userButton.dataset.choice);
        showComputerChoice(result[1]);
    });
});



// How the game must work:
//
// When the user clicks on a button, the symbol of that button is showed on the top of the pressed button
// in the same time that a random button of the computer is clicked and is showed below its pressed button.
// Thus, the game must highlight the winner of the round in some way (maybe coloring the result text to green, red or blue).
// The screen must be highlighted in that way until the user clicks a button again.
//
// Step 1 - Create event listener to all user buttons ✅
// Step 2 - Find some way to output a value from the button to input in the funcion playRound ✅
// Step 3 - ...

