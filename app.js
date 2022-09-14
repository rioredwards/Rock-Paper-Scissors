/* Imports */

/* State */
let gameState = 'move'; // 'move' or 'results'
let userSelection; // rock, paper or scissors
let compSelection; // rock, paper or scissors
let result; // 'win', 'lose'

const selections = [
    {
        value: 'rock',
        beats: 'scissors',
    },
    {
        value: 'paper',
        beats: 'rock',
    },
    {
        value: 'scissors',
        beats: 'paper',
    },
];

/* Actions */
function loadPage() {
    displayMove();
    // displayResults();
    // displayScoreboard();
}

/* function compMove() {
    const randNum = Math.floor(Math.random() * 3);
} */

/* Component */
// get DOM
const gameStateText = document.getElementById('game-state-text');
const rockBtn = document.getElementById('rockMove');
const paperBtn = document.getElementById('paperMove');
const scissorsBtn = document.getElementById('scissorsMove');

const playAgainBtn = document.getElementById('playAgainButton');

// display
function displayMove() {}
// function displayResults() {} TODO
// function displayScoreboard() {} TODO

// event listeners
rockBtn.addEventListener('click', () => {
    console.log('rock click');
    userSelection = selections[0];
    // compSelection = compMove();
    logSelections();
    gameState = 'results';
    // result = calcResult();
    // updateScore(result);
    loadPage();
});

paperBtn.addEventListener('click', () => {
    console.log('paper click');
    userSelection = selections[1];
    // compSelection = compMove();
    logSelections();
    gameState = 'results';
    // result = calcResult();
    // updateScore(result);
    loadPage();
});

scissorsBtn.addEventListener('click', () => {
    console.log('scissors click');
    userSelection = selections[2];
    // compSelection = compMove();
    logSelections();
    gameState = 'results';
    // result = calcResult();
    // updateScore(result);
    loadPage();
});

playAgainBtn.addEventListener('click', () => {
    console.log('play again click');
    gameState = 'move';
    // resetMove();
    loadPage();
});

/* Run page load code */
loadPage();
logDOM();

/* Logging */
function logDOM() {
    console.log('gameStateText: ', gameStateText);
    console.log('rockBtn: ', rockBtn);
    console.log('paperBtn: ', paperBtn);
    console.log('scissorsBtn: ', scissorsBtn);
}

function logSelections() {
    console.log('userSelection: ', userSelection);
    console.log('compSelection: ', compSelection);
}
