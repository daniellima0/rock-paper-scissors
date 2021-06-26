"use strict";

function getRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

function getComputerChoice() {
    let randomNumber = getRandomNumber(2);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

function playRound(playerChoice) {

    let computerChoice = getComputerChoice();
    let capitalizedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    let capitalizedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    let resultTieArray = [];
    let resultWinArray = [];
    let resultLoseArray = [];

    if (capitalizedPlayerChoice == capitalizedComputerChoice) {
        resultTieArray = [`It's a tie! Both players chose ${capitalizedComputerChoice}`, capitalizedComputerChoice, 'tie'];
        return resultTieArray;
    } else if (capitalizedPlayerChoice == "Rock" && capitalizedComputerChoice == "Paper" || capitalizedPlayerChoice == "Paper" && capitalizedComputerChoice == "Scissors" || capitalizedPlayerChoice == "Scissors" && capitalizedComputerChoice == "Rock") {
        resultLoseArray = [`You Lose! ${capitalizedComputerChoice} beats ${capitalizedPlayerChoice}`, capitalizedComputerChoice, 'lose'];
        return resultLoseArray;
    } else {
        resultWinArray = [`You Win! ${capitalizedPlayerChoice} beats ${capitalizedComputerChoice}`, capitalizedComputerChoice, 'win'];
        return resultWinArray;
    }
}

function showResult(resultArray, resultType) {
    const container = document.querySelector('#container');
    const oldParagraph = container.querySelector("#resultParagraph");
    oldParagraph && oldParagraph.remove();
    const paragraph = document.createElement('p');
    paragraph.id = "resultParagraph";
    paragraph.textContent = resultArray;
    paragraph.style.fontSize = '1.8rem';
    paragraph.style.textAlign = 'center';
    paragraph.style.position = 'absolute';
    paragraph.style.top = '54%';
    paragraph.style.right = '0';
    paragraph.style.left = '0';
    paragraph.style.width = 'max-content';
    paragraph.style.height = 'max-content';
    paragraph.style.margin = 'auto';
    if (resultType == 'tie') {
        paragraph.style.color = 'blue';
    } else if (resultType == 'lose') {
        paragraph.style.color = 'red';
    } else if (resultType == 'win') {
        paragraph.style.color = 'green';
    }
    container.appendChild(paragraph);
    return paragraph;
}

function showUserChoice(choice) {

    const container = document.querySelector('#container');
    // Why querySelectorAll doesn't work?
    const oldSymbol = container.querySelector(".resultSymbol");
    oldSymbol && oldSymbol.remove();

    if (choice == 'Rock') {
        const rockSymbol = document.createElement('img');
        rockSymbol.className = "resultSymbol";
        rockSymbol.src = "rock.png";
        rockSymbol.style.width = '6rem';
        rockSymbol.style.position = 'absolute';
        rockSymbol.style.top = '33rem';
        rockSymbol.style.left = '11.8rem';
        rockSymbol.style.margin = 'auto';
        container.append(rockSymbol);
        return rockSymbol;
    } else if (choice == 'Paper') {
        const paperSymbol = document.createElement('img');
        paperSymbol.className = "resultSymbol";
        paperSymbol.src = "paper.png";
        paperSymbol.style.width = '6rem';
        paperSymbol.style.position = 'absolute';
        paperSymbol.style.top = '33rem';
        paperSymbol.style.left = '11.8rem';
        paperSymbol.style.margin = 'auto';
        container.append(paperSymbol);
        return paperSymbol;
    } else if (choice == 'Scissors') {
        const scissorsSymbol = document.createElement('img');
        scissorsSymbol.className = "resultSymbol";
        scissorsSymbol.src = "scissors.png";
        scissorsSymbol.style.width = '6rem';
        scissorsSymbol.style.position = 'absolute';
        scissorsSymbol.style.top = '33rem';
        scissorsSymbol.style.left = '11.8rem';
        scissorsSymbol.style.margin = 'auto';
        container.append(scissorsSymbol);
        return scissorsSymbol;
    }
}

function showComputerChoice(choice) {
    const container = document.querySelector('#container');
    const oldSymbol = container.querySelector(".resultSymbolComputer");
    oldSymbol && oldSymbol.remove();

    if (choice == 'Rock') {
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
        return rockSymbol;
    } else if (choice == 'Paper') {
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
        return paperSymbol;
    } else if (choice == 'Scissors') {
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
        return scissorsSymbol;
    }
}

function showUserCounter(result, counter) {

    if (result == 'win') {
        counter++;
    }

    let oldCounterDiv = document.querySelector('#user-counter');
    oldCounterDiv && oldCounterDiv.remove();
    let counterDiv = document.createElement('div');
    counterDiv.id = 'user-counter';
    counterDiv.textContent = counter;
    counterDiv.style.backgroundColor = '#bbb';
    counterDiv.style.width = '5rem';
    counterDiv.style.height = '5rem';
    counterDiv.style.textAlign = 'center';
    counterDiv.style.position = 'absolute';
    counterDiv.style.top = '33rem';
    counterDiv.style.left = '35rem';
    counterDiv.style.lineHeight = counterDiv.style.height;
    counterDiv.style.fontSize = '2rem';
    counterDiv.style.border = '0.15rem solid black';
    counterDiv.style.borderRadius = '5%';
    container.append(counterDiv);

    return counter;
}
function showComputerCounter(result, counter) {
    if (result == 'lose') {
        counter++;
    }

    let oldCounterDiv = document.querySelector('#computer-counter');
    oldCounterDiv && oldCounterDiv.remove();
    let counterDiv = document.createElement('div');
    counterDiv.id = 'computer-counter';
    counterDiv.textContent = counter;
    counterDiv.style.backgroundColor = '#bbb';
    counterDiv.style.width = '5rem';
    counterDiv.style.height = '5rem';
    counterDiv.style.textAlign = 'center';
    counterDiv.style.position = 'absolute';
    counterDiv.style.top = '20rem';
    counterDiv.style.left = '35rem';
    counterDiv.style.lineHeight = counterDiv.style.height;
    counterDiv.style.fontSize = '2rem';
    counterDiv.style.border = '0.15rem solid black';
    counterDiv.style.borderRadius = '5%';
    container.append(counterDiv);

    return counter;
}

function endGame(resultParagraph, resultUserSymbol, resultComputerSymbol, resultType) {
    if (counterWin >= 5 || counterLose >= 5) {
        resultParagraph.remove();
        resultUserSymbol.remove();
        resultComputerSymbol.remove();
        console.log('game over');
        let userButtons = Array.from(document.querySelectorAll(".user-button"));
        userButtons.forEach(userButton => {
            userButton.disabled = true;
            userButton.addEventListener('mouseenter', () => {
                userButton.style.cursor = "not-allowed";
            })
        })

        const finalResult = document.createElement('p');
        finalResult.id = "finalResult";
        if (resultType == 'win') {
            finalResult.textContent = "You Won!";
            finalResult.style.color = "green";
        } else if (resultType == 'lose') {
            finalResult.textContent = "You Lost!";
            finalResult.style.color = "red";
        }
        finalResult.style.fontSize = '2.5rem';
        finalResult.style.textAlign = 'center';
        finalResult.style.position = 'absolute';
        finalResult.style.top = '50%';
        finalResult.style.right = '0';
        finalResult.style.left = '0';
        finalResult.style.width = 'max-content';
        finalResult.style.height = 'max-content';
        finalResult.style.margin = 'auto';
        container.appendChild(finalResult);
        const refreshMessage = document.createElement('p');
        refreshMessage.textContent = "Refresh the page to restart the game :\)";
        refreshMessage.style.fontSize = '1.8rem';
        refreshMessage.style.textAlign = 'center';
        refreshMessage.style.position = 'absolute';
        refreshMessage.style.top = '59%';
        refreshMessage.style.right = '0';
        refreshMessage.style.left = '0';
        refreshMessage.style.width = 'max-content';
        refreshMessage.style.height = 'max-content';
        refreshMessage.style.margin = 'auto';
        container.appendChild(refreshMessage);
    }
}

const userButtons = Array.from(document.querySelectorAll('.user-button'));
const computerButtons = Array.from(document.querySelectorAll('.computer-button'));

let counterWin = 0;
let counterLose = 0;

userButtons.forEach(userButton => {
    userButton.addEventListener('click', e => {
        let resultArray = playRound(userButton.dataset.choice);
        let resultParagraph = showResult(resultArray[0], resultArray[2]);
        let resultUserSymbol = showUserChoice(userButton.dataset.choice);
        let resultComputerSymbol = showComputerChoice(resultArray[1]);
        counterWin = showUserCounter(resultArray[2], counterWin);
        counterLose = showComputerCounter(resultArray[2], counterLose);
        endGame(resultParagraph, resultUserSymbol, resultComputerSymbol, resultArray[2]);
    });
});



// How the game must work:
//
// When the user clicks on a button, the symbol of that button is showed on the top of the pressed button
// in the same time that a random button of the computer is clicked and is showed below its pressed button.
// Thus, the game must highlight the winner of the round in some way (maybe coloring the resultArray text to green, red or blue).
// The screen must be highlighted in that way until the user clicks a button again.
//
// Step 1 - Create event listener to all user buttons ✅
// Step 2 - Find some way to output a value from the button to input in the funcion playRound ✅
// Step 3 - ...

//add a box counter on the right side of both opponents and display counterLose and CounterWin