// js file for high-scores page

// VARIABLES
// variables from high-scores.html
var highScoresEl = document.querySelector("#highScores");
var clearScoresButton = document.querySelector("#clear");

// FUNCTIONS
function renderHighScores() {
    highScoresEl.textContent = "Scores go here!";
}

// FUNCTION CALLS
// Generate high scores page
// TO DO - either this works or the listener works, how do i get both to work?
renderHighScores();