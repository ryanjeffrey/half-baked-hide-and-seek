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

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    // then increment the guesses
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
}
