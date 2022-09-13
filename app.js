/* Imports */

/* State */
let gameState = 'move'; // 'move' or 'results'

/* Actions */
function loadPage() {
    displayMove();
    // displayResults();
    // displayScoreboard();
}

/* Component */
// get DOM
const gameStateText = document.getElementById('game-state-text');
const rockBtn = document.getElementById('rockMove');
const paperBtn = document.getElementById('paperMove');
const scissorsBtn = document.getElementById('scissorsMove');

// display
function displayMove() {}
// function displayResults() {} TODO
// function displayScoreboard() {} TODO

// event listeners
rockBtn.addEventListener('click', () => {
    console.log('rock click');
});

paperBtn.addEventListener('click', () => {
    console.log('paper click');
});

scissorsBtn.addEventListener('click', () => {
    console.log('scissors click');
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
