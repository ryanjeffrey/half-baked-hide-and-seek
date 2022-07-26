// import functions and grab DOM elements
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const shedButton = document.getElementById('shed-button');

const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const shedContainer = document.getElementById('shed-container');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const tryAgainButton = document.getElementById('try-again-button');
const resetButton = document.getElementById('reset-button');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

tryAgainButton.addEventListener('click', () => {
    removeFace();

    // show buttons
    treeButton.disabled = false;
    boulderButton.disabled = false;
    shedButton.disabled = false;

    // hide 'try again' button
    tryAgainButton.classList.add('hidden');
});

resetButton.addEventListener('click', () => {
    correctGuesses = 0;
    incorrectGuesses = 0;
    totalGuesses = 0;

    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;
    removeFace();

    // show buttons
    treeButton.disabled = false;
    boulderButton.disabled = false;
    shedButton.disabled = false;

    // hide 'try again' button
    tryAgainButton.classList.add('hidden');
});

function handleGuess(correctSpot, userGuess) {
    // increment the guesses
    totalGuesses++;

    // then grab the appropriate container element for the correct guess from the DOM
    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    // then add the face class to that element so that the face shows up
    correctHidingPlaceEl.classList.add('face');

    // then if the user guess is correct, increment the correct guesses
    if (correctSpot === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;

    hideGuessButtons();

    // show 'try again' button
    tryAgainButton.classList.remove('hidden');
}

function removeFace() {
    // reset the styles
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedContainer.classList.remove('face');
}

function hideGuessButtons() {
    treeButton.disabled = true;
    boulderButton.disabled = true;
    shedButton.disabled = true;
}

function showGuessButtons() {
    treeButton.disabled = false;
    boulderButton.disabled = false;
    shedButton.disabled = false;
}