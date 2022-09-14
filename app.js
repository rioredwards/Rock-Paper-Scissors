/* Imports */

/* State */
let gameState = 'move'; // 'move' or 'results'
let userSelection; // rock, paper or scissors
let compSelection; // rock, paper or scissors
let result; // 'win', 'lose' or 'tie'

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
    if (gameState === 'move') {
        displayMove();
    } else {
        displayResults();
    }
    // displayScoreboard();
}

function getCompMove() {
    return selections[Math.floor(Math.random() * selections.length)];
}

function getResult(userSelection, compSelection) {
    if (userSelection.value === compSelection.value) {
        return 'tie';
    } else if (userSelection.beats === compSelection.value) {
        return 'win';
    } else if (userSelection.value === compSelection.beats) {
        return 'lose';
    } else {
        console.warn('Error in getResult()');
    }
}

/* Component */
// get DOM
const moveSection = document.getElementById('move');
const resultsSection = document.getElementById('results');

const gameStateText = document.getElementById('game-state-text');
const rockBtn = document.getElementById('rockMove');
const paperBtn = document.getElementById('paperMove');
const scissorsBtn = document.getElementById('scissorsMove');

const playAgainBtn = document.getElementById('playAgainButton');

// display
function displayMove() {
    resultsSection.classList.add('hidden');
    moveSection.classList.remove('hidden');
}

function displayResults() {
    moveSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

// function displayScoreboard() {} TODO

// event listeners
rockBtn.addEventListener('click', () => {
    console.log('rock click');
    userSelection = selections[0];
    compSelection = getCompMove();
    logSelections();
    result = getResult(userSelection, compSelection);
    console.log(result);
    gameState = 'results';
    // updateScore(result);
    loadPage();
});

paperBtn.addEventListener('click', () => {
    console.log('paper click');
    userSelection = selections[1];
    compSelection = getCompMove();
    logSelections();
    result = getResult(userSelection, compSelection);
    console.log(result);
    gameState = 'results';
    // updateScore(result);
    loadPage();
});

scissorsBtn.addEventListener('click', () => {
    console.log('scissors click');
    userSelection = selections[2];
    compSelection = getCompMove();
    logSelections();
    result = getResult(userSelection, compSelection);
    console.log(result);
    gameState = 'results';
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
    console.log('moveSection: ', moveSection);
    console.log('resultsSection: ', resultsSection);
}

function logSelections() {
    console.log('userSelection: ', userSelection);
    console.log('compSelection: ', compSelection);
}
