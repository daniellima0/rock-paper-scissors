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
    const para = document.createElement('p');
    para.textContent = result;
    para.style.fontSize = '1.8rem';
    para.style.textAlign = 'center';
    para.style.position = 'absolute';
    para.style.top = '54%';
    para.style.right = '0';
    para.style.left = '0';
    para.style.width = 'max-content';
    para.style.height = 'max-content';
    para.style.margin = 'auto';
    const container = document.querySelector('#container');
    container.appendChild(para);
}

function showUserChoice(choice) {

    const container = document.querySelector('#container');

    if (choice == 'rock') {
        const rockSymbol = document.createElement('img');
        rockSymbol.src = "rock.png";
        rockSymbol.style.width = '6rem';
        rockSymbol.style.position = 'absolute';
        rockSymbol.style.top = '33rem';
        rockSymbol.style.left = '11.8rem';
        rockSymbol.style.margin = 'auto';
        container.append(rockSymbol);
    } else if (choice == 'paper') {
        const paperSymbol = document.createElement('img');
        paperSymbol.src = "paper.png";
        paperSymbol.style.width = '6rem';
        paperSymbol.style.position = 'absolute';
        paperSymbol.style.top = '33rem';
        paperSymbol.style.left = '11.8rem';
        paperSymbol.style.margin = 'auto';
        container.append(paperSymbol);
    } else if (choice == 'scissors') {
        const scissorsSymbol = document.createElement('img');
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

    if (choice == 'rock') {
        const rockSymbol = document.createElement('img');
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
        // Failed solution nº1
        // para.remove();
        // rockSymbol.remove();
        // paperSymbol.remove();
        // scissorsSymbol.remove();

        // Failed solution nº2
        // window.location.reload();
        
        let result = playRound(userButton.dataset.choice);
        showResult(result[0]);
        showUserChoice(userButton.dataset.choice);
        showComputerChoice(result[1]);
    })
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

