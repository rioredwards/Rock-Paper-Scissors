/* State */
let gameState = 'move'; // 'move' or 'results'
let userSelection; // rock, paper or scissors
let compSelection; // rock, paper or scissors
let result; // 'Win!', 'Lose!' or 'Draw!'

const scoreboard = {
    wins: 0,
    losses: 0,
    draws: 0,
    total: 0,
};

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
    displayScoreboard();
}

function getCompMove() {
    return selections[Math.floor(Math.random() * selections.length)];
}

function getResult(userSelection, compSelection) {
    if (userSelection.value === compSelection.value) {
        return 'Draw!';
    } else if (userSelection.beats === compSelection.value) {
        return 'Win!';
    } else if (userSelection.value === compSelection.beats) {
        return 'Lose!';
    } else {
        console.warn('Error in getResult()');
    }
}

function updateScoreboard() {
    scoreboard.total++;
    switch (result) {
        case 'Win!':
            scoreboard.wins++;
            break;
        case 'Lose!':
            scoreboard.losses++;
            break;
        case 'Draw!':
            scoreboard.draws++;
            break;
    }
}

/* Component */
// get DOM
// Sections
const moveSection = document.getElementById('move');
const resultsSection = document.getElementById('results');

// Scoreboard Section
const winsEl = document.getElementById('wins-display');
const lossesEl = document.getElementById('losses-display');
const drawsEl = document.getElementById('draws-display');
const totalEl = document.getElementById('total-display');

// Move Sections
const rockBtn = document.getElementById('rockMove');
const paperBtn = document.getElementById('paperMove');
const scissorsBtn = document.getElementById('scissorsMove');

// Results Sections
const resultsText = document.getElementById('results-text');
const rockResult = document.getElementById('rockResult');
const paperResult = document.getElementById('paperResult');
const scissorsResult = document.getElementById('scissorsResult');
const rockSelectionText = document.getElementById('rockSelectionText');
const paperSelectionText = document.getElementById('paperSelectionText');
const scissorsSelectionText = document.getElementById('scissorsSelectionText');
const playAgainBtn = document.getElementById('playAgainButton');

// display
function displayScoreboard() {
    winsEl.textContent = scoreboard.wins;
    lossesEl.textContent = scoreboard.losses;
    drawsEl.textContent = scoreboard.draws;
    totalEl.textContent = scoreboard.total;
}

function displayMove() {
    resultsSection.classList.add('hidden');
    moveSection.classList.remove('hidden');
}

function displayResults() {
    resultsText.textContent = result;
    displaySelections(userSelection);
    moveSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

function displaySelections(userSelection) {
    if (userSelection.value === 'rock') {
        if (result === 'Win!') {
            rockResult.classList.add('win');
            rockSelectionText.textContent = 'You';
            scissorsResult.classList.add('lose');
            scissorsSelectionText.textContent = 'Comp';
        } else if (result === 'Lose!') {
            rockResult.classList.add('lose');
            rockSelectionText.textContent = 'You';
            paperResult.classList.add('win');
            paperSelectionText.textContent = 'Comp';
        } else {
            rockResult.classList.add('draw');
            rockSelectionText.textContent = 'Both';
        }
    } else if (userSelection.value === 'paper') {
        if (result === 'Win!') {
            paperResult.classList.add('win');
            paperSelectionText.textContent = 'You';
            rockResult.classList.add('lose');
            rockSelectionText.textContent = 'Comp';
        } else if (result === 'Lose!') {
            paperResult.classList.add('lose');
            paperSelectionText.textContent = 'You';
            scissorsResult.classList.add('win');
            scissorsSelectionText.textContent = 'Comp';
        } else {
            paperResult.classList.add('draw');
            paperSelectionText.textContent = 'Both';
        }
    } else {
        if (result === 'Win!') {
            scissorsResult.classList.add('win');
            scissorsSelectionText.textContent = 'You';
            paperResult.classList.add('lose');
            paperSelectionText.textContent = 'Comp';
        } else if (result === 'Lose!') {
            scissorsResult.classList.add('lose');
            scissorsSelectionText.textContent = 'You';
            rockResult.classList.add('win');
            rockSelectionText.textContent = 'Comp';
        } else {
            scissorsResult.classList.add('draw');
            scissorsSelectionText.textContent = 'Both';
        }
    }
}

function resetMove() {
    rockSelectionText.textContent = '';
    paperSelectionText.textContent = '';
    scissorsSelectionText.textContent = '';
    rockResult.className = 'icon-result';
    paperResult.className = 'icon-result';
    scissorsResult.className = 'icon-result';
}

// event listeners
rockBtn.addEventListener('click', () => {
    userSelection = selections[0];
    compSelection = getCompMove();
    result = getResult(userSelection, compSelection);
    updateScoreboard();
    gameState = 'results';
    console.log('rock click');
    console.log(result);
    logSelections();
    // updateScore(result);
    loadPage();
});

paperBtn.addEventListener('click', () => {
    userSelection = selections[1];
    compSelection = getCompMove();
    result = getResult(userSelection, compSelection);
    updateScoreboard();
    gameState = 'results';
    console.log('paper click');
    console.log(result);
    logSelections();
    // updateScore(result); TODO
    loadPage();
});

scissorsBtn.addEventListener('click', () => {
    userSelection = selections[2];
    compSelection = getCompMove();
    result = getResult(userSelection, compSelection);
    updateScoreboard();
    gameState = 'results';
    console.log('scissors click');
    console.log(result);
    logSelections();
    // updateScore(result); TODO
    loadPage();
});

playAgainBtn.addEventListener('click', () => {
    gameState = 'move';
    console.log('play again click');
    resetMove();
    loadPage();
});

/* Run page load code */
loadPage();
logDOM();

/* Logging */

function logDOM() {
    console.log('gameStateText: ', resultsText);
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
